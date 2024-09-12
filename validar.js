function validar(form){

    //validar nombre

    let nombre=form.nombre.value.trim()

    if(nombre==""){
        alert("Escribe tu nombre");
        return false
    }

    let edad=form.edad.value.trim()

    if(edad===""|| isNaN(edad) || edad<=0){
        alert("Por Favor, ingrese una edad valida");
        return false
    }

    let sexo=form.sexo.value
    if(sexo==""){
        alert("Por favor, selecciona un sexo");
        return false
    }

    let deporte=form.deporte.value
    if(deporte==="ninguno"){
        alert("Por favor, seleccione un deporte favorito");
        return false
    }

    //Si todo es valido 
    return true

}