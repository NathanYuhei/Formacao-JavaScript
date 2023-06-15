const listaLivros = require("./array_ordenado");

function binary_search(list, target, start, end) {
    let middle = Math.floor((start + end) / 2);

    if (start > end) {
        return -1;
    }
    if (target === list[middle].preco) {
        return list[middle];
    }
    if (target < list[middle].preco) {
        return binary_search(list, target, start, middle - 1);
    }
    if (target > list[middle].preco) {
        return binary_search(list, target, middle + 1, end);
    }
    
}

console.log(binary_search(listaLivros, 36, 0, listaLivros.length - 1));