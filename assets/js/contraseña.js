function validarContraseña(){
    let contraseñaIngresada=prompt("Ingresa tu contraseña")
    if(contraseñaIngresada==="secreto123"){
      alert("acceso concedido.")
    }else{
      alert("aceso denegado.")
    }
}

validarContraseña()