const clientes = require("./clientes.json");

function encontrar(listaClientes, chave, valor) {
    return listaClientes.find((item) => item[chave].includes(valor))
}

function filtrarApartamentoSemComplemento(lista) {
    return lista.filter((cliente) => {
        return ( //return da função normalmente omitido em arrow functions de uma linha
            cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento") //cliente.endereco.apartamento ja retorna booleano 
        );
    });
}

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    })

    return resultado
}

const listaOrdenada = ordenar(clientes, "nome")
console.log(listaOrdenada)