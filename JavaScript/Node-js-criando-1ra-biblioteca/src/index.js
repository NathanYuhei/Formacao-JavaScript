import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length > 0 ? resultados : 'Não há links';
}

function trataErro(erro) {
    throw new Error(chalk.red(erro, 'Não há arquivos no diretório'));
}

async function pegaArquivo(caminho_arquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminho_arquivo, encoding);
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro)
    }
}

// assíncrono
/* function pegaArquivo(caminho_arquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminho_arquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
} */

// sincrono 
/* function pegaArquivo(caminho_arquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminho_arquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
} */

export default pegaArquivo;