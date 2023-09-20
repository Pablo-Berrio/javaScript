function esPrimo(numero) {
    for (let i = 2, raizCuadrada = Math.sqrt(numero); i <= raizCuadrada; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero > 1;
  }
  
  function sumaPrimerosPrimos(N) {
    let suma = 0;
    let contador = 0;
    let numeroActual = 2;
  
    while (contador < N) {
      if (esPrimo(numeroActual)) {
        suma += numeroActual;
        contador++;
      }
      numeroActual++;
    }
  
    return suma;
  }
  
  var N = parseInt(prompt("A cuantos numeros primos desea calcular su suma:"));
  var resultado = sumaPrimerosPrimos(N);
  
  alert("La suma de los primeros "+ N + " números primos es: "+ resultado);