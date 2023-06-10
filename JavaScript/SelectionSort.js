const livros = require('./ListaLivro');
console.log(livros);
console.log("\n");

for (let i = 0; i < livros.length; i++) {
    let menor = i;
    for (let j = i; j < livros.length; j++) {
        if (livros[j].preco < livros[menor].preco) {
            menor = j;
        }
    }
    let aux = livros[i];
    livros[i] = livros[menor];
    livros[menor] = aux;
}

console.log(livros);

// 25 15 30 50 45 20
// 15 25