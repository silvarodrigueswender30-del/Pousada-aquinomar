const sharp = require('sharp');
sharp('C:\\Users\\Teste\\Downloads\\Pousada-aquino-mar\\imagens\\cafe-aquino.jpeg')
  .avif({ lossless: true }) // using lossless for 'absolute quality' as requested
  .toFile('public/images/cafe-aquino.avif')
  .then(() => console.log('Conversion successful'))
  .catch(err => console.error('Error during conversion:', err));
