function hanFetClick(click) {
    if (click == false) {
        alert("Hiciste click en el boton");
    } else if (click == true) {
        alert("Hiciste click en la imagen");
    }
}

let tareas = ["Realizar HTML", "Realizar CSS", "Realizar JS"]


function añadirTareasClick() {
    let tarea = prompt("Introduce la nueva tarea", '');
    tareas.push(tarea);
    for (let i = 0; i < tareas.length; i++) {
        document.getElementById(i).innerHTML = tareas[i];
    }
}

