const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2) {
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let atual = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }

    atual++;
  }

  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }

  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }

  return listaFinal;
}

//console.log(juntaListas(edGalho, edFolha))

//minha versão
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

  if (i < list1.length) {
    while (i < list1.length) {
      new_list.push(list1[i]);
      i++
    }
  }
  else if (j < list2.lenght) {
    while (j < list2.lenght) {
      new_list.push(list2[j]);
      j++;
    }
  }

  return new_list;
} 

console.log(merge(edGalho, edFolha))

module.exports = {
  merge
};