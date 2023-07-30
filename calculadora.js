function calcular_impuesto() {
    // Obtener los valores ingresados por el usuario
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    // Verificar que no sean valores menores a cero
    if (valor1 < 0 || valor2 < 0) {
        alert("Los valores no pueden ser menores que cero");
        return; // Detener la ejecución de la función
    }
    // Calcular el impuesto a la renta
    var resta = valor1 - valor2;
    var result = 0;
    if (resta < 11212){
        result = 0;
    }else if (resta >= 11212 && resta < 14285){
        result = ((resta-11212)*0.05)+0;
    }else if (resta >= 14285 && resta < 17854){
        result = ((resta-14285)*0.1)+154;
    }else if (resta >= 17854 && resta < 21442){
        result = ((resta-17854)*0.12)+551;
    }else if (resta >= 21442 && resta < 42874){
        result = ((resta-21442)*0.05)+941;
    }else if (resta >= 42874 && resta < 64297){
        result = ((resta-42874)*0.05)+4156;
    }else if (resta >= 64297 && resta < 85729){
        result = ((resta-64297)*0.05)+8440;
    }else if (resta >= 85729 && resta < 114288){
        result = ((resta-85729)*0.05)+13798;
    }else{
        result = ((resta-114288)*0.05)+22366;
    }       
    // Mostrar el resultado en un elemento de la página
    document.getElementById("resultado").innerHTML = "El impuesto a pagar es: " + result;
}