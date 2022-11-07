//* IMPORTAMOS EL ARCHIVO JSON QUE CONTIENE TODA LA INFORMACIÓN DE LAS ESCENAS.
import controlEscenas from "../src/escenas.json" assert { type: "json" };
import { controlDesiciones } from "./controller.js";

const canvas = document.getElementById("canvas");
const btnNext = document.getElementById("btnNext");
const btnA = document.getElementById("botonA");
const btnB = document.getElementById("botonB");

let rutaActual = "introduccion";
let idEscenaActual = controlEscenas.introduccion[0].id;
let idEscenaSiguiente = controlEscenas.introduccion[0].idSiguiente[0];

let esDesicion = false;

const cambiarEscena = () => {
	// Si el usuario se encuentra en la escena de desición, no retornará nada al entrar a este método y saldrá inmediatamente
	if (!esDesicion === false) return;

	console.log(` INICIO ---- idEscenaActual: ${idEscenaActual}, idSiguiente: ${idEscenaSiguiente},`);

	const rutaEscena = controlEscenas[rutaActual][idEscenaActual].src;
	console.log(rutaEscena);
	canvas.setAttribute("src", rutaEscena);

	// Guardamos el id de la escena siguiente
	idEscenaSiguiente = controlEscenas[rutaActual][idEscenaActual].idSiguiente[0];
	// Actualizamos la id de la escena actual con el valor de la escena siguiente GUARDADA anteriormente.r
	idEscenaActual = controlEscenas[rutaActual][idEscenaActual].id;
	esDesicion = controlDesiciones(rutaActual, idEscenaActual, mostrarBotones);
};

const opcionBoton = (botonEscogido) => {
	if (botonEscogido === "A") {
		// * Opciones botón A
		if (rutaActual === "introduccion" && idEscenaActual === 10) rutaActual = "ruta1";

		ocultarBotones();

		return;
	}

	// * Opciones botón B
	if (rutaActual === "introduccion" && idEscenaActual === 10) rutaActual = "ruta2";
	ocultarBotones();
};

const mostrarBotones = () => {
	btnA.style.display = "inline";
	btnB.style.display = "inline";
};

const ocultarBotones = () => {
	btnA.style.display = "none";
	btnB.style.display = "none";

	canvas.setAttribute("src", controlEscenas[rutaActual][0].src);

	idEscenaActual = controlEscenas[rutaActual][0].id;
	idEscenaSiguiente = controlEscenas[rutaActual][0].idSiguiente[0];

	console.log(
		`CAMBIO DE RUTA ${rutaActual} ---- idEscenaActual: ${idEscenaActual}, idSiguiente: ${idEscenaSiguiente},`
	);

	esDesicion = false;
};

btnA.addEventListener("click", () => opcionBoton("A", rutaActual, idEscenaActual, ocultarBotones));
btnB.addEventListener("click", () => opcionBoton("B", rutaActual, idEscenaActual, ocultarBotones));

btnNext.addEventListener("click", () => {
	cambiarEscena();
});

// Evento que detecta cuando el usuario presiona la tecla 'Space'
document.addEventListener("keypress", function onEvent(event) {
	if (event.key === " ") {
		// Previene que se haga scroll hacia abajo cuando el usuario presione la tecla 'Space.
		event.preventDefault();
		console.log("Precionaste la tecla 'Space'");
		cambiarEscena();
	}
});
