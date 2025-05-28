
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  if (idade === 1 && porte === 'M') {
   return true;
  }
  return false;
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  }
  return 'porte não reconhecido';
}

async function buscarDadoAsync() {
  return 'Pipoca';
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}