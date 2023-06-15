const listaLivros = require('./arrays')

function merge(list1, list2) {
    let new_list = []
    let i = 0
    let j = 0
  
    while (i < list1.length && j < list2.length) {
      if (list1[i].preco < list2[j].preco) {
        new_list.push(list1[i]);
        i++
      }
      else {
        new_list.push(list2[j]);
        j++
      }
    }
  

    return new_list.concat(i < list1.length ? list1.slice(i) : list2.slice(j));
  } 

function mergeSort(list) {
    if (list.length > 1) {
        let middle = Math.floor(list.length / 2);
        
        let list1 = mergeSort(list.slice(0, middle));
        let list2 = mergeSort(list.slice(middle, list.length));

        list = merge(list1, list2);
    }
    
    return list;
}

console.log(mergeSort(listaLivros))

// criar outro merge usando funções do js 