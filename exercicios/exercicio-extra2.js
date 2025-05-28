function contarVogaisTexto(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
  
    for (let letra of texto) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }  
    return contador;
}  
    
console.log(contarVogaisTexto("ola mundo")); 
console.log(contarVogaisTexto("este e um teste")); 
console.log(contarVogaisTexto("eu sou Barbara Wagner")); 