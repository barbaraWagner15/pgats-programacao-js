/**
 * Calculadora de ração diária
 * 
 * Crie um script que receba do dog em kg + estoque atual de ração em gramas.
 * Calcule a quantidade diária de ração com base na seguinte fórmula: 
 * gramas por dia = peso x 30
 * 
 * Exiba:
 * -Nome do dog
 * -Peso
 * -Quantidade de ração recomendada por dia
 * -Quantos dias o estoque atual vai durar
 */

const nome = `Mel`
const peso = 10
const estoque = 5000

const gramaPorDia = peso * 30
const duracaoEstoque = estoque / gramaPorDia
console.log(`Nome do dog: ${ nome }`)
console.log(`Peso: ${ peso }`)
console.log(`Gramas por dia: ${ gramaPorDia }`)
console.log(`O estoque vai durar: ${ duracaoEstoque }`)