var dato=parseInt(prompt("Ingrese un numero"))
    var resultado=dato
    if(dato===0 || dato===1){
        resultado=1
    }
    for(var i=1; i<dato; i++){
        resultado=resultado*i
    }
    
    alert("El factorial de "+dato+" es "+resultado)


    function calcularFactorial(numero) {
        if (numero === 0 || numero === 1) {
          return 1;
        }
            let factorial = 1;
        
         for (let i = 2; i <= numero; i++) {
          factorial *= i;
        }
        
        return factorial;
       }
      
      var numero = prompt("Ingrese un numero");
      var factorial = calcularFactorial(numero);
      
    alert("El factorial de " + numero + " es: " + factorial);