const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcDir = 'C:\\Users\\Teste\\Downloads\\Pousada-aquino-mar\\imagens\\passeio';
const destDir = 'public/images/passeio';

const map = {
  'Praia do Cais.jpeg': 'praia-do-cais.avif',
  'Praia do Jabaquara.jpeg': 'praia-do-jabaquara.avif',
  'Praia-Do-Pontal-04.jpeg': 'praia-do-pontal.avif',
  'cachoeira-do-toboga-poco-do-tarzan-7.jpeg': 'cachoeira-toboga.avif',
  'centro-historico.jpeg': 'centro-historico.avif'
};

Object.entries(map).forEach(([srcFile, destFile]) => {
  sharp(path.join(srcDir, srcFile))
    .avif({ lossless: true })
    .toFile(path.join(destDir, destFile))
    .then(() => console.log(`Converted ${srcFile} to ${destFile}`))
    .catch(err => console.error(`Error converting ${srcFile}:`, err));
});
