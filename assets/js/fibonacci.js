function fibonacci(n) {
    let sequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  
    return sequence;
  }
  
  const termino = parseInt(prompt("Ingresa el término deseado:"));
  const resultado = fibonacci(termino);
  
  alert(resultado);