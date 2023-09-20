// function convertirTemperatura(temperatura, direccion) {
//     if (direccion === "1") {
//       // Convertir de Celsius a Fahrenheit
//       return (temperatura * 9/5) + 32;
//     } else if (direccion === "2") {
//       // Convertir de Fahrenheit a Celsius
//       return (temperatura - 32) * 5/9;
//     } else {
//       return 'Dirección de conversión inválida';
//     }
//   }
  
//   // Ejemplo de uso
//   var temperatura = prompt("Ingrese temperatura");
//   var direccion = prompt("Ingresa direccion:\n 1. CF: Grados celcius a farenheit \n 2. FC: Grados Farenheit a celcius "); // Cambia a 'FC' para convertir de Fahrenheit a Celsius
  
//   var temperaturaConvertida = convertirTemperatura(temperatura, direccion);
//   alert('Temperatura convertida: '+ temperaturaConvertida);

//   convertirTemperatura()

// Array con las opciones del menú
var opciones = ["Opción 1", "Opción 2", "Opción 3"];

// Objeto para almacenar la cantidad de selecciones por opción
var selecciones = {};

// Función para mostrar el menú
function mostrarMenu() {
  var menu = "Selecciona una opción:\n";
  
  // Generar las opciones del menú
  for (var i = 0; i < opciones.length; i++) {
    menu += (i + 1) + ". " + opciones[i] + "\n";
  }
  
  // Obtener la selección del usuario
  var seleccion = prompt(menu);
  
  // Incrementar el contador de selecciones para la opción elegida
  if (seleccion && seleccion >= 1 && seleccion <= opciones.length) {
    var opcionSeleccionada = opciones[seleccion - 1];
    selecciones[opcionSeleccionada] = (selecciones[opcionSeleccionada] || 0) + 1;
    
    alert("Has seleccionado: " + opcionSeleccionada);
  } else {
    alert("Selección inválida");
  }
}

// Mostrar el menú
mostrarMenu();

// Mostrar la opción más seleccionada por el usuario
var opcionMasSeleccionada = Object.keys(selecciones).reduce(function(a, b) { return selecciones[a] > selecciones[b] ? a : b });
alert("La opción más seleccionada es: " + opcionMasSeleccionada);
  