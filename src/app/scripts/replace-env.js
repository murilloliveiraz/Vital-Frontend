const fs = require('fs');
const targetPath = './src/environment.prod.ts';

const environmentFileContent = `
  export const environment = {
    production: true,
    endpoint: "${process.env.ENDPOINT}",
    clientId: "${process.env.CLIENT_ID}",
    mercadoPagoAPIKey: "${process.env.MERCADOPAGO}",
  };
`;

fs.writeFile(targetPath, environmentFileContent, (err) => {
  if (err) {
    console.error('Erro ao escrever o arquivo de ambiente', err);
  } else {
    console.log('Arquivo de ambiente atualizado com sucesso!');
  }
});
