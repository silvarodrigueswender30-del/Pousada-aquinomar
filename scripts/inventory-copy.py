"""Inventory built HTML plus conditional copy extracted with the TypeScript AST."""
import csv
import json
import re
import subprocess
import sys
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path

TERMS = ['pousada', 'Paraty', 'Parati', 'hotel', 'hospedagem']
def counts(text):
    return {t: len(re.findall(r'(?<!\w)' + t + r'(?!\w)', text, re.I)) for t in TERMS}
def clean(text):
    return re.sub(r'\s+', ' ', text).strip()
class Node:
    def __init__(self, tag, attrs=(), parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs), parent, []
    def text(self):
        return clean(''.join(c if isinstance(c,str) else (' ' if c.tag=='br' else c.text()) for c in self.children))
    def descendants(self):
        for c in self.children:
            if isinstance(c,Node):
                yield c
                yield from c.descendants()
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = self.current = Node('root')
    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.current)
        self.current.children.append(node)
        if tag not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:
            self.current = node
    def handle_endtag(self,tag):
        n = self.current
        while n.parent:
            if n.tag == tag:
                self.current=n.parent
                break
            n=n.parent
    def handle_data(self,data):
        self.current.children.append(data)

routes = {'/':'index.html','/grupos-e-caravanas':'grupos-e-caravanas.html','/quartos/suite-casal':'quartos/suite-casal.html','/quartos/suite-multipla':'quartos/suite-multipla.html','/politica-de-privacidade-e-cookies':'politica-de-privacidade-e-cookies.html','/404':'_not-found.html'}
supp = json.loads(subprocess.check_output(['node','scripts/copy-supplements.cjs'],text=True,encoding='utf8'))
rows=[]
for page, file in routes.items():
    parser=Parser()
    parser.feed((Path('.next/server/app')/file).read_text(encoding='utf8'))
    sections=[n for n in parser.root.descendants() if n.tag in {'section','header','footer'}]
    def loc(node):
        n=node
        while n.parent:
            if n in sections:
                heading=next((x.text() for x in n.descendants() if x.tag in {'h1','h2'}),None)
                return n.attrs.get('id') or heading or f'{n.tag} {sections.index(n)+1}'
            n=n.parent
        return 'conteudo principal' if node.tag!='title' else 'head'
    def add(tag,text,node):
        rows.append(dict(page=page,tag=tag,text=clean(text),location=loc(node)))
    atomic={'title','h1','h2','h3','h4','h5','h6','p','a','button','label','li','blockquote','figcaption','option'}
    def walk(n):
        if n.tag in {'script','style','svg','noscript'}: return
        # Omit decorative clones, but retain empty image alt attributes.
        if n.attrs.get('aria-hidden')=='true' and n.tag!='img': return
        if n.tag=='meta':
            if n.attrs.get('name')=='description': add('meta description',n.attrs.get('content',''),n)
            return
        if n.tag=='img': add('alt',n.attrs.get('alt','[atributo ausente]'),n)
        if 'aria-label' in n.attrs: add('aria-label',n.attrs['aria-label'],n)
        if n.tag in {'input','iframe'} and n.attrs.get('title'): add('title (atributo)',n.attrs['title'],n)
        if n.tag=='input' and n.attrs.get('placeholder'): add('body (placeholder)',n.attrs['placeholder'],n)
        if n.tag in atomic and not any(x.tag in atomic for x in n.descendants()):
            if n.text(): add(n.tag.upper() if n.tag.startswith('h') else ('CTA ('+n.tag+')' if n.tag in {'a','button'} else 'title' if n.tag=='title' else 'body ('+n.tag+')'),n.text(),n)
            for x in n.descendants():
                if x.tag=='img': add('alt',x.attrs.get('alt','[atributo ausente]'),x)
            return
        for c in n.children:
            if isinstance(c,Node): walk(c)
            elif clean(c): add('body ('+n.tag+')',c,n)
    walk(parser.root)
    for row in supp:
        if row['page'] not in {page,'shared'}: continue
        if page=='/404' and row['page']=='shared': continue
        # FAQ questions may include an ordinal in the rendered button.
        if any(r['page']==page and (r['text']==row['text'] or re.sub(r'^\d+\s*','',r['text'])==row['text']) for r in rows): continue
        rows.append({**row,'page':page})

out=Path('docs/seo'); out.mkdir(parents=True,exist_ok=True)
phase='depois' if '--after' in sys.argv else 'antes'
if '--saved' in sys.argv:
    rows=json.loads((out/'inventario-antes.json').read_text(encoding='utf8'))
    for page in routes:
        if page=='/404': continue
        for row in supp:
            if row['page'] in {page,'shared'} and not any(r['page']==page and (r['text']==row['text'] or re.sub(r'^\d+\s*','',r['text'])==row['text']) for r in rows):
                rows.append({**row,'page':page})
for row in rows:
    if row['tag']=='meta description':row['location']='head'
    row['text']=row['text'].replace('hospedagem,um','hospedagem, um').replace('sobrenome,uma','sobrenome, uma').replace('família,uma','família, uma')
for row in rows:
    row['matches']=', '.join(t for t,n in counts(row['text']).items() if n) or 'sem correspondência com termo-alvo'
with (out/f'inventario-{phase}.csv').open('w',encoding='utf-8-sig',newline='') as f:
    writer=csv.DictWriter(f,fieldnames=list(rows[0]));writer.writeheader();writer.writerows(rows)
(out/f'inventario-{phase}.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf8')
lines=[f'# Inventário de copy {phase} das alterações','',
f'Fonte: build local do código-fonte, {phase} da edição da Home. Domínio configurado: https://pousadaaquinomarparaty.com.br (o endereço do pedido tinha um "a" adicional).', '',
'Contagem literal de palavras completas, sem distinguir maiúsculas. Paraty e Parati são separados; hotel não inclui hotéis. Espaços e quebras de layout são normalizados. Cada unidade textual é contada uma vez por posição/página; cabeçalho e componentes compartilhados contam em cada página. Clones aria-hidden de carrosséis, scripts, JSON-LD, URLs WhatsApp, metadados sociais duplicados e componentes não montados ficam fora. Aria-label e alt são categorias separadas. Respostas de FAQ e estados condicionais de cookies/popup vêm do AST do código. Textos em imagens são inventariados em anexo e não entram na contagem HTML. A página 404 é listada separadamente e excluída do total editorial.', '',
'Title e H1 são destacados pela função de identificação da página; não há peso numérico de SEO atribuído. Referência: [Google Search Central](https://developers.google.com/search/docs/appearance/title-link).','',
'Incluem-se variantes textuais de slides e cards expandidos, cada texto adicional uma vez por página. Textos idênticos de estados alternativos não são somados novamente. Contadores são fotografados no estado inicial do HTML (antes da animação); seus valores finais e textos em imagens estão no anexo. A contagem é do corpus editorial inventariado, não do número de palavras simultaneamente visíveis em uma tela. O corpo externo de mapas/iframes não pertence à copy do site.','']
editorial=[r for r in rows if r['page']!='/404']
lines += ['## Totais do site (5 páginas)','', '| Termo | Total | title | H1 | H2 | body | Outras tags |','|---|---:|---:|---:|---:|---:|---:|']
for t in TERMS:
    cats=defaultdict(int)
    for r in editorial: cats[r['tag'] if r['tag'] in {'title','H1','H2'} else 'body' if r['tag'].startswith('body') else 'outras']+=counts(r['text'])[t]
    lines.append('| '+t+' | '+' | '.join(str(sum(cats.values())) if c=='total' else str(cats[c]) for c in ['total','title','H1','H2','body','outras'])+' |')
lines+=['',f'Variação adicional "hotéis": {sum(len(re.findall(r"(?<!\w)hotéis(?!\w)",r["text"],re.I)) for r in editorial)} ocorrências.','', '## Distribuição por tag','', '| Tag | '+' | '.join(TERMS)+' |','|---|'+'---:|'*len(TERMS)]
for tag in sorted(set(r['tag'] for r in editorial)):
    lines.append('| '+tag+' | '+' | '.join(str(sum(counts(r['text'])[t] for r in editorial if r['tag']==tag)) for t in TERMS)+' |')
lines+=['','## Seções com zero correspondência','']
groups=defaultdict(list)
for r in editorial:
    section = r['location'].split(' / ')[0]
    if section.startswith('FAQ') or section=='faq': section='FAQ'
    groups[(r['page'],section)].append(r)
for (page,location),items in groups.items():
    if not any(any(counts(r['text']).values()) for r in items):lines.append(f'- {page}: {location}')
for page in routes:
    lines+=['',f'## {page}','','| Tag HTML / tipo | Texto exato (espaços normalizados) | Localização | Termos |','|---|---|---|---|']
    for r in rows:
        if r['page']==page:lines.append('| '+' | '.join(r[k].replace('|','\\|') or '(vazio)' for k in ['tag','text','location','matches'])+' |')
(out/f'inventario-{phase}.md').write_text('\n'.join(lines)+'\n',encoding='utf8')
print('\n'.join(lines[:22]))
print(f'{len(rows)} itens inventariados')
