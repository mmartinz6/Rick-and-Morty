import { getPersonaje } from "./servicesEstado.js";

const mostrarPersonajes = document.getElementById("mostrarPersonajes")
const estadoSeleccionado = document.getElementById("estadoSeleccionado")

const datosPersonajes = async function () {

    mostrarPersonajes.innerHTML = "";
    
    const estado = estadoSeleccionado.value;

    const personajes = await getPersonaje();

    const filtrados = personajes.results.filter(function(personaje){
        return personaje.status.toLowerCase() === estado.toLowerCase();

    });

    filtrados.map(function(personaje) {
        const contenedor = document.createElement("div");
        contenedor.classList.add("div-personaje")

        const imgPersonaje = document.createElement("img");
        imgPersonaje.src = personaje.image;

        const nomEstado = document.createElement("p");
        nomEstado.textContent = personaje.name + ": " + personaje.status;

        contenedor.appendChild(imgPersonaje);
        contenedor.appendChild(nomEstado);
        mostrarPersonajes.appendChild(contenedor)


    });
}

estadoSeleccionado.addEventListener("change", datosPersonajes);

window.addEventListener("load", datosPersonajes);