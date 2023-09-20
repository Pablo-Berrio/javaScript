function calcularPotencia(){
    let base = parseFloat(prompt("Ingrese el número base:"));
    let exponente = parseInt(prompt("Ingrese el exponente:"));
  
    let resultado = Math.pow(base, exponente);
  
    alert("El resultado de "+base+ " elevado a la potencia "+ exponente +" es: " +resultado);
  }
  
  calcularPotencia()