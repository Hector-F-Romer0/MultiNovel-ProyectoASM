//* IMPORTAMOS EL ARCHIVO JSON QUE CONTIENE TODA LA INFORMACIÓN DE LAS ESCENAS.
import controlEscenas from "../src/escenas.json" assert { type: "json" };

const canvas = document.getElementById("canvas");
const btnNext = document.getElementById("btnNext");
const escenas = controlEscenas.escenas;
let escenaActual = "Inicio";
let decisionesTomadas = 0;
let rutaActual = "RutaA";

console.log(escenas);
console.log(escenas[0].src);
console.log(escenas[1]);

const cambiarEscena = (escenaSiguiente) => {
	const escenaActual = controlEscenas[escenaSiguiente] || controlEscenas["Primera"];
	console.log(escenaActual);
	// canvas.setAttribute("src", escenaActual);
};

// const elegirRuta = (opcionEscogida) => {
// 	if (decisionesTomadas === 0) {
// 		if (opcionEscogida === "B") {
// 			rutaActual = "RutaE";
// 		}
// 	} else if (decisionesTomadas === 1) {
// 	}
// };

const saludar = () => console.log("Hola");

// Control del navbar responsive.
const openNav = () => {
	document.getElementById("mobile-menu").style.width = "100%";
};

const closeNav = () => {
	document.getElementById("mobile-menu").style.width = "0%";
};

btnNext.addEventListener("click", saludar);

// Evento que detecta cuando el usuario presiona la tecla 'Space'
document.addEventListener("keypress", function onEvent(event) {
	if (event.key === " ") {
		console.log("Precionaste la tecla 'Space'");
	}
});
