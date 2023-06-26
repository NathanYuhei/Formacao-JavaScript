import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from 'chalk';
import validaLinks from "../http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, nome_arquivo) {
    if (valida) {
        console.log(chalk.yellow(nome_arquivo), await validaLinks(resultado));
    }
    else {
        console.log(chalk.yellow(nome_arquivo), resultado);
    }
}

async function exibeLinks(argumentos) {
    const valida = argumentos[3] === '--valida';
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    }
    catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log("Arquivo ou diretório não existe.");
            return;
        }
    }
    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado, caminho);
    }   
    else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nome_arquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nome_arquivo}`);
            imprimeLista(valida, lista, nome_arquivo);
        });
    }
}

exibeLinks(caminho);