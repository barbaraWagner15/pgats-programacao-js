

function filtrarNumerosInteiros(lista) {
    return lista.filter(item => typeof item === 'number');
  }

const entradaDados = [1, 2, 'três', 'quatro', 5, 6, 'sete', 8, 9];
const resultado = filtrarNumerosInteiros(entradaDados);

console.log(resultado); 