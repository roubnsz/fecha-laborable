console.log("si funciona");
//En esta funcion se asigna si es laborable o no.
function laboral(x){
    if(x == 0 || x == 6)
    document.getElementById("resultado").value += ", no laborable";
    else 
    document.getElementById("resultado").value += ", es laborable";
}

function fechaCompleta(){
    let dia = document.getElementById("dia").value;
    let mes = parseInt(document.getElementById("mes").value)-1;
    let anio = document.getElementById("anio").value;
    const fecha = new Date(anio, mes, dia).getDay();
    
    switch(fecha){
        case 0:
            document.getElementById("resultado").value = "Domingo";
            break;
        case 1:
            document.getElementById("resultado").value = "Lunes";
            break;
        case 2:
            document.getElementById("resultado").value = "Martes";
            break;
        case 3:
            document.getElementById("resultado").value = "Miercoles";
            break;
        case 4:
            document.getElementById("resultado").value = "Jueves";
            break;
        case 5:
            document.getElementById("resultado").value = "Viernes";
            break;
        case 6:
            document.getElementById("resultado").value = "Sabado";
            break;
    }
    laboral(fecha);
}
