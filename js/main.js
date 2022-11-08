//* IMPORTAMOS EL ARCHIVO JSON QUE CONTIENE TODA LA INFORMACIÓN DE LAS ESCENAS.
import controlEscenas from "../src/escenas.json" assert { type: "json" };
import { controlDesiciones } from "./controller.js";

const canvas = document.getElementById("canvas");
const btnNext = document.getElementById("btnNext");
const btnA = document.getElementById("botonA");
const btnB = document.getElementById("botonB");
const audioButton = document.getElementById("audioButton");

let reset = true;
let rutaActual = "introduccion";
let idEscenaActual = controlEscenas.introduccion[0].id;
let idEscenaSiguiente = controlEscenas.introduccion[0].idSiguiente[0];
let esDesicion = false;

const cambiarEscena = () => {
	// * Si el usuario se encuentra en la escena de desición, no retornará nada al entrar a este método y saldrá inmediatamente
	if (!esDesicion === false) return;

	if (idEscenaSiguiente === undefined) {
		rutaActual = "introduccion";
		resetRuta();
		return;
	}

	const rutaEscena = controlEscenas[rutaActual][idEscenaActual].src;
	canvas.setAttribute("src", rutaEscena);
	// Guardamos el id de la escena siguiente
	idEscenaSiguiente = controlEscenas[rutaActual][idEscenaActual].idSiguiente[0];
	// Actualizamos la id de la escena actual con el valor de la escena siguiente GUARDADA anteriormente.r
	idEscenaActual = controlEscenas[rutaActual][idEscenaActual].id;
	esDesicion = controlDesiciones(rutaActual, idEscenaActual, mostrarBotones);
};

const opcionBoton = (botonEscogido) => {
	audioButton.play();
	if (botonEscogido === "A") {
		// * Opciones botón A. Si no se cambia de ruta, el valor de reset será false para seguir con la secuencia de imágenes
		if (rutaActual === "introduccion" && idEscenaActual === 10) rutaActual = "ruta1";
		if (rutaActual === "ruta1" && idEscenaActual === 7) reset = false;
		if (rutaActual === "ruta1" && idEscenaActual === 12) reset = false;
		if (rutaActual === "ruta3" && idEscenaActual === 5) reset = false;
		if (rutaActual === "ruta5" && idEscenaActual === 4) reset = false;
		if (rutaActual === "ruta5" && idEscenaActual === 8) reset = false;
		if (rutaActual === "ruta7" && idEscenaActual === 8) reset = false;

		ocultarBotones();
		return;
	}

	// * Opciones botón B
	if (rutaActual === "introduccion" && idEscenaActual === 10) rutaActual = "ruta5";
	if (rutaActual === "ruta1" && idEscenaActual === 7) rutaActual = "ruta3";
	if (rutaActual === "ruta1" && idEscenaActual === 12) rutaActual = "ruta2";
	if (rutaActual === "ruta3" && idEscenaActual === 5) rutaActual = "ruta4";
	if (rutaActual === "ruta5" && idEscenaActual === 4) rutaActual = "ruta7";
	if (rutaActual === "ruta7" && idEscenaActual === 8) rutaActual = "ruta8";
	ocultarBotones();
};

const mostrarBotones = () => {
	btnA.style.display = "inline";
	btnB.style.display = "inline";
};

const ocultarBotones = () => {
	btnA.style.display = "none";
	btnB.style.display = "none";

	if (reset) {
		// Resetea los índices de las escenas a 0 para arrancar una nueva ruta
		resetRuta();
	} else {
		// cambiarEscena();
		canvas.setAttribute("src", controlEscenas[rutaActual][idEscenaActual].src);
		// Guardamos el id de la escena siguiente
		idEscenaSiguiente = controlEscenas[rutaActual][idEscenaActual].idSiguiente[0];
		// Actualizamos la id de la escena actual con el valor de la escena siguiente GUARDADA anteriormente.r
		idEscenaActual = controlEscenas[rutaActual][idEscenaActual].id;
	}

	reset = true;
	esDesicion = false;
};

const resetRuta = () => {
	canvas.setAttribute("src", controlEscenas[rutaActual][0].src);
	idEscenaActual = controlEscenas[rutaActual][0].id;
	idEscenaSiguiente = controlEscenas[rutaActual][0].idSiguiente[0];
};

btnA.addEventListener("click", () => opcionBoton("A", rutaActual, idEscenaActual, ocultarBotones));
btnB.addEventListener("click", () => opcionBoton("B", rutaActual, idEscenaActual, ocultarBotones));

btnNext.addEventListener("click", () => {
	cambiarEscena();
});

// * Evento que detecta cuando el usuario presiona la tecla 'Space'
document.addEventListener("keypress", function onEvent(event) {
	if (event.key === " ") {
		// Previene que se haga scroll hacia abajo cuando el usuario presione la tecla 'Space.
		event.preventDefault();
		cambiarEscena();
	}
});
