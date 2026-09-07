# Auditoria técnica SEO

Data: 2026-09-06

## Escopo

- Home: `/`
- Grupos & Caravanas: `/grupos-e-caravanas`
- Sem alteração da copy publicada, exceto o novo link contextual solicitado na Home.

## 1. Dados estruturados

### O que já estava correto

- A Home já tinha schema `LodgingBusiness`.
- A Home já tinha schema `FAQPage`.
- A página `/grupos-e-caravanas` já tinha schema `FAQPage`.
- A página `/grupos-e-caravanas` já tinha schema `BreadcrumbList` com a hierarquia Home > Grupos & Caravanas.

### O que foi corrigido

- O schema `LodgingBusiness` da Home recebeu `aggregateRating` com `ratingValue: 5.0` e `reviewCount: 411`.
- O `FAQPage` da Home passou a usar exatamente as 7 perguntas e respostas exibidas no FAQ atual da página.
- O campo `logo` do schema foi ajustado para o arquivo real publicado: `/logo-pousada1.webp`.

### Observação de validação

- A estrutura JSON-LD foi validada localmente no HTML renderizado.
- Não foi possível confirmar o resultado dentro do Rich Results Test do Google de forma automatizada neste ambiente, porque a ferramenta não oferece um retorno simples via linha de comando. Recomenda-se testar a URL publicada manualmente no Rich Results Test após o deploy.

## 2. Indexabilidade do FAQ

### O que foi encontrado

- Na Home, as respostas do FAQ eram inseridas no HTML apenas quando o usuário abria cada pergunta.
- Em `/grupos-e-caravanas`, as respostas também eram renderizadas apenas após clique.
- Em `/grupos-e-caravanas`, as perguntas atrás de "Ver mais perguntas" não existiam no HTML inicial antes da interação.

### O que foi corrigido

- Home: todas as respostas do FAQ agora existem no HTML inicial e a abertura/fechamento é controlada visualmente por CSS/animação.
- Grupos: todas as 10 perguntas e respostas existem no HTML inicial, inclusive as que continuam escondidas atrás de "Ver mais perguntas".

## 3. Blocos duplicados no DOM

### O que já estava correto

- O carrossel/marquee de depoimentos duplica os cards para animação contínua, e a segunda cópia já estava com `aria-hidden="true"`.

### O que foi corrigido

- Em `/grupos-e-caravanas`, a seção "Paraty oferece roteiro para todos os tipos de grupo" tinha duas marcações no DOM: uma versão Swiper e uma versão grid para desktop.
- A versão duplicada foi removida. Agora existe apenas uma estrutura responsiva para essa seção.

### Home

- A auditoria local não encontrou duplicação problemática equivalente na Home durante os testes.

## 4. Link interno contextual da Home para Grupos

### O que foi encontrado

- O link para `/grupos-e-caravanas` existia no menu de navegação.
- Não havia um link contextual dentro do corpo da Home.

### O que foi corrigido

- Foi adicionado um link real no corpo da Home, logo após a seção de café da manhã:
  "Vai com um grupo? Veja condições especiais para grupos e caravanas em Paraty →"
- O link usa `href="/grupos-e-caravanas"`.

## Validações executadas

- `npm run build`
- Auditoria automatizada local via `scripts/check-technical-audit.cjs`
- Verificação de HTML inicial para respostas de FAQ
- Verificação de schemas `LodgingBusiness`, `FAQPage` e `BreadcrumbList`
- Verificação de overflow horizontal em desktop `1366x900` e mobile `390x844`
- Verificação da duplicação intencional dos depoimentos com `aria-hidden="true"`
