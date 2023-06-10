const livros = require('./ListaLivro');

console.log(livros, "\n");

for (let i = 1; i < livros.length; i++) {
    let aux = livros[i];
    let j = i - 1;
    while (aux.preco < livros[j]?.preco && j >= 0) {
        livros[j + 1] = livros[j];
        j--;
    }
    livros[j + 1] = aux;
}
console.log(livros);


// 25 15 30 50 45 20
// 