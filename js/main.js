//* IMPORTAMOS EL ARCHIVO JSON QUE CONTIENE TODA LA INFORMACIÓN DE LAS ESCENAS.
import controlEscenas from "../src/escenas.json" assert { type: "json" };

const canvas = document.getElementById("canvas");
const btnNext = document.getElementById("btnNext");
const toggleMenu = document.getElementById("toggle-menu");
const closeToggleMenu = document.getElementById("close-toggle-menu");

console.log(controlEscenas.introduccion);
console.log(controlEscenas.introduccion[0].id);
console.log(controlEscenas.introduccion[0].src);
console.log(controlEscenas.ruta1[0].src);

let escenaActual = 1;
let decisionesTomadas = 0;
let rutaActual = "introduccion";

const cambiarEscena = (idSiguiente) => {
	// if (rutaActual === "introduccion" && idSiguiente === 8) {
	// 	rutaActual = "ruta1";
	// 	console.log(`Se cambió de ruta a ${rutaActual}`);
	// 	escenaActual = 0;
	// }
	const escenaSiguiente = controlEscenas.introduccion[idSiguiente].src || controlEscenas.introduccion[0].src;
	// console.log(`IdSiguiente: ${idSiguiente}, escenaSiguiente: ${escenaSiguiente}`);
	canvas.setAttribute("src", escenaSiguiente);
	console.log(controlEscenas.introduccion[idSiguiente].id);
};

btnNext.addEventListener("click", () => {
	cambiarEscena(escenaActual);
	escenaActual++;
});

// Evento que detecta cuando el usuario presiona la tecla 'Space'
document.addEventListener("keypress", function onEvent(event) {
	if (event.key === " ") {
		// Previene que se haga scroll hacia abajo cuando el usuario presione la tecla 'Space.
		event.preventDefault();
		console.log("Precionaste la tecla 'Space'");
		cambiarEscena(escenaActual);
		escenaActual++;
	}
});

// Control del navbar responsive.
toggleMenu.addEventListener("click", () => (document.getElementById("mobile-menu").style.width = "100%"));
closeToggleMenu.addEventListener("click", () => (document.getElementById("mobile-menu").style.width = "0%"));
