# Revisão da copy da Home

Aplicação do documento enviado após o commit 862eb9e. Os inventários anteriores são fotografias históricas desse trabalho e não foram sobrescritos.

- Hero: subhead substituída pela hospedagem familiar em Caborê e referência ao Centro Histórico; H1 e CTAs preservados.
- Sobre: "visitante" passa a "hóspede"; o segundo parágrafo inclui "cada detalhe da pousada foi pensado".
- História: "de passagem por Paraty" passa a "hospedado em Paraty"; a história da família permanece igual.
- Curadoria: atualizadas as quatro legendas de escuna, jeep, Ilha do Pelado e Trindade. Todos os cards já tinham legenda no estado expandido; o funcionamento do acordeão foi preservado.
- Café: descrição de "Tempo à mesa" atualizada conforme o documento.
- Acomodações: descrição da Suíte Casal atualizada apenas na Home. O texto da página individual do quarto permanece intacto.
- Footer: nova tagline aplicada no componente compartilhado, presente na Home, em Grupos e em Privacidade. As páginas individuais de quartos não montam esse footer.
- FAQ: as sete respostas existentes estão completas e abrem no acordeão; não foram substituídas pelas sugestões condicionais.
- Depoimentos reais, comodidades, localização, galeria, CTA final e metadados preservados.

## Contadores

O HTML inicial passa a renderizar os valores finais configurados (5.0, 411+ e 98%) em vez de zero. A animação continua disponível com JavaScript, mas fica oculta à árvore de acessibilidade; uma representação estável informa o valor final aos leitores de tela. Não houve alteração dos números nem nova verificação das avaliações junto às plataformas.

## Verificação

O script `scripts/check-copy-followup.cjs` verifica os valores sem JavaScript, as cinco legendas ao expandir, as sete respostas do FAQ, o footer compartilhado, a preservação da descrição na página individual e ausência de overflow horizontal em desktop e celular. Requer Playwright disponível no ambiente e o servidor local na porta 3001.
