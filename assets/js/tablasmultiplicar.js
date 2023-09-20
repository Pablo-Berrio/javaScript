function tablaDeMultiplicar(){
    let numeroIngresadoPorUsuario = prompt("Ingresa un número para obtener su tabla de multiplicar:");
    let tabla = "";
  
    for(let i = 1; i <= 10; i++){
        tabla += numeroIngresadoPorUsuario + " x " + i +" = " + numeroIngresadoPorUsuario * i +"\n" 
    }
  
    alert(tabla);
  }
  
  tablaDeMultiplicar()