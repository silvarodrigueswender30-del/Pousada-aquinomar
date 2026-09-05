# Ajustes aplicados somente à Home

Dados de busca fornecidos pelo solicitante: hotéis (579), paraty, rj (148), hotel parati (80), pousada (68), período informado de seis meses. Não houve acesso aos relatórios originais para validar a métrica, o período ou deduplicar Perfil da Empresa e Search Console. Estes números orientam a linguagem; não representam uma promessa de posicionamento.

| Item / localização | Texto original | Texto novo | Justificativa |
|---|---|---|---|
| title | Pousada em Paraty com Café da Manhã \| Aquino Mar — Caborê, RJ | Pousada Aquino Mar em Paraty, RJ \| Sinta-se em casa | Une marca, destino e acolhimento em 51 caracteres. |
| meta description | Pousada familiar em Caborê, a poucos minutos do Centro Histórico de Paraty. Café da manhã incluso, piscina, Wi-Fi, ar-condicionado e estacionamento gratuito. Reserve pelo WhatsApp! | Sua hospedagem em Paraty, RJ, com acolhimento de família. Café da manhã incluso, piscina e estacionamento gratuito. Reserve na Pousada Aquino Mar. | Resume benefícios já presentes e reserva direta em 146 caracteres. |
| H1 / hero | Sinta-se em casa, perto do mar. | Sua casa em Paraty, na Pousada Aquino Mar. | Mantém a ideia emocional de casa e identifica marca e destino. |
| H2 / café da manhã | O café da manhã que faz o dia começar em família | Café da manhã na pousada para começar em família | Preserva o ritual familiar e dá contexto ao serviço. |
| H2 / comodidades | Estrutura e comodidades para uma estadia sem preocupação | Comodidades para uma hospedagem sem preocupação | Mantém a promessa de conforto com o termo hospedagem. |
| H2 / localização | Localização e como chegar | Como chegar à pousada em Paraty | Identifica o destino sem mudar a função de orientação. |
| H2 / FAQ | Tire suas dúvidas | Tire suas dúvidas sobre a pousada | Explicita o assunto das perguntas com linguagem simples. |
| H2 / depoimentos | O que nossos hóspedes dizem | O que nossos hóspedes dizem da pousada | Contextualiza as avaliações sem alterar os relatos. |
| H2 / reserva final | Pronta para sua próxima estadia? | Pronta para sua próxima estadia em Paraty? | Mantém o convite original e acrescenta o destino. |
| body / introdução do FAQ | Tudo o que você precisa saber antes de se hospedar com a gente em Paraty. | Tudo o que você precisa saber antes de se hospedar com a gente em Paraty. Para quem procura um hotel em Parati, nossa pousada oferece o aconchego de uma casa de família. | Acolhe a busca por hotel e a grafia Parati em uma frase, identificando corretamente o estabelecimento como pousada. |

Os títulos sociais da Home (Open Graph e Twitter) acompanham o title e a descrição novos. A definição está em `src/app/page.tsx`; os metadados compartilhados do layout permanecem intactos.

Os H2s que já tinham termos-alvo foram preservados. O H2 funcional "Configurar cookies" também foi preservado: não é uma seção comercial. Ausência de palavras-alvo em um título não implica ausência em toda a seção; o inventário distingue essas situações.

Não se inseriu "hotéis" apenas para repetir o termo com maior número informado: a intenção de hospedagem é atendida sem apresentar uma pousada familiar como vários hotéis. Parati aparece uma única vez na copy HTML da Home. Não houve mudança de links WhatsApp, fotos, estrutura de seções ou página de Grupos.

Referência editorial: o Google recomenda títulos descritivos, concisos e sem repetição excessiva de palavras-chave ([Google Search Central](https://developers.google.com/search/docs/appearance/title-link)). Os limites de 60 e 155 caracteres seguem o pedido; a exibição nos resultados depende também da largura disponível e pode ser reescrita pelo Google.

## Arquivos do diagnóstico

- `inventario-antes.md`, `.csv` e `.json`: fotografia anterior às alterações, item por item, com termos, totais e seções sem correspondência.
- `inventario-depois.md`, `.csv` e `.json`: mesma metodologia após os ajustes.
- `anexo-estados-e-imagens.md`: textos de peças gráficas e explicação de estados dinâmicos.

Os CSVs usam UTF-8 com BOM para preservar acentos no Excel. O inventário anterior é preservado; não execute novamente o extrator sem `--saved` sobre um build posterior para representar o estado anterior.
