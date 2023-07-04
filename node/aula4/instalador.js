const { exec } = require('child_process');
const path = require('path');

const softwarePath = '"D:\\Downloads(E)\\Advanced_IP_Scanner_2.5.4594.1.exe';

exec(softwarePath, (error, stdout, stderr) => {
  if (error) {
    console.error('Ocorreu um erro ao executar o software:', error);
    return;
  }
  
  console.log('Software instalado com sucesso!');
  console.log('Saída padrão:', stdout);
  console.error('Saída de erro:', stderr);
});