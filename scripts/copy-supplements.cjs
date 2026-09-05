const fs = require('node:fs');
const ts = require('typescript');
const rows = [];
for (const [file, page] of [['src/components/sections/faq-section.tsx','/'],['src/components/sections/groups/groups-data.ts','/grupos-e-caravanas']]) {
  const tree = ts.createSourceFile(file, fs.readFileSync(file,'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let index = 0;
  function visit(n) {
    if (ts.isObjectLiteralExpression(n)) {
      const props = Object.fromEntries(n.properties.filter(ts.isPropertyAssignment).filter(p => ts.isStringLiteral(p.initializer)).map(p=>[p.name.getText(tree),p.initializer.text]));
      if (props.question && props.answer) {
        index++;
        rows.push({page,tag:'CTA (button)',text:props.question,location:`FAQ item ${index} / pergunta`});
        rows.push({page,tag:'body (p)',text:props.answer,location:`FAQ item ${index} / resposta ao expandir`});
      }
    }
    ts.forEachChild(n,visit);
  }
  visit(tree);
}
for (const file of ['src/components/cookie-consent.tsx','src/components/exit-discount-popup.tsx']) {
  const tree = ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  const location = file.includes('cookie-consent') ? 'Cookies / estados condicionais' : 'Popup de desconto / estado condicional';
  function visit(n) {
    if (ts.isJsxText(n) && n.text.trim()) {
      const parent = n.parent;
      const name = ts.isJsxElement(parent) ? parent.openingElement.tagName.getText(tree) : 'body';
      rows.push({page:'shared',tag:/^h[1-6]$/.test(name)?name.toUpperCase():name==='button'||name==='a'?'CTA ('+name+')':'body ('+name+')',text:n.text.replace(/\s+/g,' ').trim(),location});
    }
    if (ts.isJsxAttribute(n) && n.initializer && ts.isStringLiteral(n.initializer) && ['alt','aria-label','title','description'].includes(n.name.text)) {
      rows.push({page:'shared',tag:n.name.text==='alt'?'alt':n.name.text==='aria-label'?'aria-label':'body (preferencia)',text:n.initializer.text,location});
    }
    ts.forEachChild(n,visit);
  }
  visit(tree);
}
for (const file of ['src/components/ui/floating-whatsapp-button.tsx','src/components/sections/highlights-section.tsx','src/data/rooms.ts']) {
  const tree=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
  function visit(n) {
    if (ts.isVariableDeclaration(n) && n.name.getText(tree)==='MESSAGE' && ts.isStringLiteral(n.initializer)) {
      rows.push({page:'shared',tag:'body (p)',text:n.initializer.text,location:'WhatsApp flutuante / mensagem temporizada'});
    }
    if (ts.isObjectLiteralExpression(n)) {
      const props=Object.fromEntries(n.properties.filter(ts.isPropertyAssignment).filter(p=>ts.isStringLiteral(p.initializer)).map(p=>[p.name.getText(tree),p.initializer.text]));
      if (props.metadata && props.actionLabel) {
        for (const [key,tag] of [['title','H3'],['category','body (span)'],['metadata','body (p)'],['actionLabel','CTA (button)']]) {
          rows.push({page:'/',tag,text:props[key],location:`destaques / ${props.title} / card expandido`});
        }
      }
      if (props.slug && props.name) {
        const images=n.properties.find(p=>ts.isPropertyAssignment(p)&&p.name.getText(tree)==='images');
        if (images && ts.isArrayLiteralExpression(images.initializer)) {
          for(let i=2;i<=images.initializer.elements.length;i++) {
            rows.push({page:'/',tag:'alt',text:`${props.name} - foto ${i}`,location:`quartos / ${props.name} / slide ${i}`});
            rows.push({page:`/quartos/${props.slug}`,tag:'alt',text:`${props.name} na Pousada Aquino Mar em Paraty - foto ${i}`,location:`Galeria / slide ${i}`});
          }
        }
      }
    }
    ts.forEachChild(n,visit);
  }
  visit(tree);
}
for (const text of ['Fechar mensagem','Fale conosco pelo WhatsApp','Fechar menu']) rows.push({page:'shared',tag:'aria-label',text,location:'Controles compartilhados / estados interativos'});
rows.push({page:'/grupos-e-caravanas',tag:'CTA (button)',text:'Ver menos perguntas',location:'FAQ / expandido'});
console.log(JSON.stringify(rows));
