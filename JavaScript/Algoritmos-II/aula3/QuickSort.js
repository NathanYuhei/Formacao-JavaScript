const listaLivros = require('./array');

function quickSort(list, left, right) {
    if (list.length > 1) {
        let index = particiona(list, left, right);

        if (left < index - 1){
            quickSort(list, left, index - 1);
        }           
        if (index < right){
            quickSort(list, index, right);
        }
            
    }   
    return list;
}

function particiona(list, left, right) {
    let pivot = Math.floor((left + right) / 2);

    while (left <= right) {

        while (list[left].preco < list[pivot].preco) {
            left++;
        }
        while (list[right].preco > list[pivot].preco) {
            right--;
        }

        if (left <= right) {
            troca(list, left, right);
            left++;
            right--;
        }
        
    }

    return left;
}

function troca(list, i, j) {
    let aux = list[i];
    list[i] = list[j];
    list[j] = aux;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));