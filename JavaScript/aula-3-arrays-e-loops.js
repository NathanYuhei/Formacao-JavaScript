const alunos = ["Joao", "Juliana", "Ana", "Caio"]
const medias = [10, 8, 7.5, 9]

const listaAlunosMedias = [alunos, medias]

function procuraAluno(nome) {
    if (listaAlunosMedias[0].includes(nome)) {

        const [alunos, medias] = listaAlunosMedias

        const indice = alunos.indexOf(nome)

        console.log(`Nome: ${nome}, Media: ${medias[indice]}`)
    }
    else{
        console.log("Aluno nao encontrado.")
    }

}

//procuraAluno("Joao")

const numeros = [100, 200, 300, 400, 500, 600]

function loop() {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i], i)
    }
}


function media() {
    let total = 0
    for (let i = 0; i < medias.length; i++) {
        total += medias[i]
    }

    console.log(total / medias.length)
}

//media()

function teste() {
    for(let elemento of medias) {
        console.log(elemento)
    }
}
//teste()

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

const nomesMaiusculo = nomes.map((nome) => nome.toUpperCase())

//console.log(nomesMaiusculo)

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function calculaMedia(notasSala) {
    const somaDasNotas = notasSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0) //0 é valor inicial do acumulador

    const media = somaDasNotas / notasSala.length
    console.log(media)
}

calculaMedia(salaJS)