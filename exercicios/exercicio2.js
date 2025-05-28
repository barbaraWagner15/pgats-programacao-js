/**
 * Validador de idade mínima para adoção
 * 
 * Crie um script que verifique se um dog pode ser adotado com base 
 * na idade mínima definida, por exemplo, 2 anos.
 * 
 * Use os operadores adequados e exiba:
 * -Nome do dog
 * -Idade
 * -Se está apto ou não para adoção
 * 
 * Extra: aplique uma regra com operador lógico para permitir 
 * que se o cão for de pequeno porte, pode ser adotado 
 * independentemente da idade
 * 
 */

const nome = 'Ada'
const idade = 0
const porte = 'P'
const idadeMinima = 2

const adocao = idade >= idadeMinima || porte === 'P'
console.log(adocao)