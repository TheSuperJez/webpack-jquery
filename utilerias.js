function cambiarColor(){
    document.body.style.background = $('#color').val();
}
function sumar(a, b){
    return a+b;
}

function validarDatos (nombre, edad, color, id){
    return true;
}

export  {cambiarColor, sumar, validarDatos};