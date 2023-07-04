//Listando arquivos com FS
const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

//Le os arquivos e os retorna
fs.readdir(path.resolve(__dirname))
  .then(files => console.log(files))
  .catch(e => console.log(e));

/******************************************************************************************************************************************************************/

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue; //A palavra chave continue termina a atual iteração do laço em que ele se encontra e continua sua execução com a proxima iteração.
        if(/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        if(!/\.html$/g.test(fileFullPath)) continue;
        console.log(fileFullPath);
    }
}

readdir('c:\\Users\\guilh\\OneDrive\\Área de Trabalho\\javascript-udemy\\');