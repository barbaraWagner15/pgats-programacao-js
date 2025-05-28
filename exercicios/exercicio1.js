/**
 * Crie um  script para gerar a etiqueta (tag) de identificação
 * que será presa na coleira de um cachorro no abrigo.
 * O dono irá informar nome, idade, peso, raça e se é adotodado ou não.
 * -A tag deve ter nome em letra maiúscula
 * -A raça com a primeira letra maiúscula
 * -Peso
 */

const nome = "Dogo", raca = "vira-lata"
let idade = 1, peso = 1.2, adotodado = false

let nameUpperCase = nome.toUpperCase()
let racaFirsletter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter
}]

console.log(animal)