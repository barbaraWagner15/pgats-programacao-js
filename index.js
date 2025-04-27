/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Samuel',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Prog JS' 
}])

/**
 * const - para informações que nunca mudam
 * var ou let - para informações que podem mudar
 */

// informações de um dog que não muda
const nome = 'Antônia'
const raca = 'SRD'
const sexo = 'Fêmea'
const cor = 'Caramelo'
const dataDeNascimento = '27/02/2020'
const porte = 'Pequeno'

// informações de um dog que muda
let idade = 5              //Number
let peso = 10              //Number
let vacinado = true        //Boolean
let castrado = true        //Boolean
let tamanho = 'Pequeno'    //String

//hoisting - içamento ou elevação

const irmaos = [
    {
    nome: "Thor",
    idade : 2
},
{
    nome: "Hela",
    idade: 3
}
]
console.table(irmaos)


/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * funcoes - leia e escreva

 cadeia - String
 inteir/real - Number
 logico - Boolean
 vetor/matriz - Array

 undefined
 null

 BiInt = Number para números extremamente grandes
 Symbol = identificador único
*/

/**
 * Strings
 */

// 'Turma 02 do PGATS' - aspas simples ou single quote
// "Turma 02 do PGATS" - aspas duplas ou double quote
// `Turma 02 do PGATS` - template strings

const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"
console.log("Aula 03 da Turma " + turma + " no sábado dia 05 de Abril")

console.log(`Aula ${ numeroAula} da Turma ${ turma } no sábado dia ${data}`)

//quantidade de caracteres que tem em numeroAula
console.log(numeroAula.length)

//aplit - separar a string
//quando ele encontra um espaço, ele quebra a string
const nomesDeAlunos = "Giuliana Debora Andre"
const nomesDeAalunosSplit = nomesDeAlunos.split(" ")
console.log(nomesDeAlunos.toLowerCase()) //minúsculo
console.log(nomesDeAlunos.toUpperCase()) //maiúsculo
console.log(nomesDeAlunos.includes ("Giuliana")) //verificar se a string procurada possui - retorna true ou false
console.log(nomesDeAlunos.replaceAll('a', 'i')) //substitui todos os a por i

//nessa variável tem espaços antes e depois. o tyrim tira esses espaços
const conceitosLogica = "       inteiro real     "
console.log(conceitosLogica.trim())

//dessa data, quero pegar apenas o 05. O '0' é a posição 0 e o 5 a posição 1. Então preciso colocar 2 porqwue é a próxima posição
let dataParaCortar = "05 de Abril"
console.log(dataParaCortar.slice(0, 2))