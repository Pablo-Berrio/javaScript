function contadorDeOpciones(){
    const opcionEscogida= parseInt(prompt("Ingresa el numero que quieras: "));
    let primeraOpcion=0;
    let segundaOpcion=0
    let terceraOpcion=0
    let cuartaOpcion=0
    let quintaOpcion=0
    let sextaOpcion=0
    let septimaOpcion=0
    let octavaOpcion=0


for(let i=1; i<=opcionEscogida; i++){
    if(opcionEscogida===1){
        primeraOpcion++;
    }else if (opcionEscogida===2){
        segundaOpcion++
    }else if (opcionEscogida===3){
        terceraOpcion++
    }else if (opcionEscogida===4){
        cuartaOpcion++
    }else if  (opcionEscogida===5){
        quintaOpcion++
    }else if (opcionEscogida===6){
        sextaOpcion++
    }else if (opcionEscogida===7){
        septimaOpcion++
    }else{
        octavaOpcion++
    }
}

alert("cantidad de veces que se selecciono la primera opcion: "+primeraOpcion)
alert("cantidad de veces que se selecciono la segunda opcion: "+segundaOpcion)
alert("cantidad de veces que se selecciono la tercera opcion: "+terceraOpcion)
alert("cantidad de veces que se selecciono la cuarta opcion: "+cuartaOpcion)
alert("cantidad de veces que se selecciono la quinta opcion: "+quintaOpcion)
alert("cantidad de veces que se selecciono la sexta opcion: "+sextaOpcion)
alert("cantidad de veces que se selecciono la septima opcion: "+septimaOpcion)
alert("cantidad de veces que se selecciono la octava opcion: "+octavaOpcion)

}

