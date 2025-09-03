import { getPersonaje } from "./servicesEstado.js";

const contenedorPersonajes = document.getElementById("contenedorPersonajes")
const estadoSeleccionado = document.getElementById("estadoSeleccionado")

let personajes = [];

const cargarResultados = async function () {
    const datos = await getPersonaje();
    personajes = data.cargarResultados

}

estadoSelect.addEventListener("change", async function() {
    const estado = estadoSelect.value

    const filtrados = personajes.filter(p => p.status.toLowerCase() === estado);
    mostrarPersonajes(filtrados);
});