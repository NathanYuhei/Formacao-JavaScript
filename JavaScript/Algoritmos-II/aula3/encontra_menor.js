const listaLivros = require("./array");

function encontraMenor(list, pivot) {
    let n = 0;
    for (let i = 0; i < list.length; i++){
        if (list[i].preco < pivot.preco) {
            n++;
        }
    }

    troca(list, list.indexOf(pivot), n);
}

function troca(list, i, j) {
    let aux = list[i];
    list[i] = list[j];
    list[j] = aux;  
}

console.log(encontraMenor(listaLivros, listaLivros[2]));