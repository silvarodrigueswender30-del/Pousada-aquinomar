const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcDir = 'C:\\Users\\Teste\\Downloads\\Pousada-aquino-mar\\imagens\\Quarto triplo';
const destDir = 'public/images/quarto-triplo';

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
files.forEach((file, index) => {
  const destName = `quarto-triplo-${index + 1}.avif`;
  sharp(path.join(srcDir, file))
    .avif({ lossless: true })
    .toFile(path.join(destDir, destName))
    .then(() => console.log(`Converted ${file} to ${destName}`))
    .catch(err => console.error(`Error converting ${file}:`, err));
});
