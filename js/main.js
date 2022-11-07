//* IMPORTAMOS EL ARCHIVO JSON QUE CONTIENE TODA LA INFORMACIÓN DE LAS ESCENAS.
import controlEscenas from "../src/escenas.json" assert { type: "json" };

const canvas = document.getElementById("canvas");
const btnNext = document.getElementById("btnNext");
const btnA = document.getElementById("botonA");
const btnB = document.getElementById("botonB");
const toggleMenu = document.getElementById("toggle-menu");
const closeToggleMenu = document.getElementById("close-toggle-menu");

let decisionesTomadas = 0;

let escenaActual = 1;
let esDesicion = false;
let rutaActual = "introduccion";

const cambiarEscena = () => {
	console.log(`Inicio escenaActual: ${escenaActual}`);
	// Si el usuario se encuentra en la escena de desición, no retornará nada al entrar a este método y saldrá inmediatamente
	if (!esDesicion === false) return;

	console.log(controlEscenas[rutaActual][escenaActual].src);
	const escenaSiguiente = controlEscenas[rutaActual][escenaActual].src || controlEscenas.introduccion[0].src;
	canvas.setAttribute("src", escenaSiguiente);

	controlDesiciones();
};

const controlDesiciones = () => {
	if (rutaActual === "introduccion" && escenaActual === 9) {
		mostrarBotones();
		console.log("El botón o la tecla espacio no deberían arrojar ningún error.");
		return (esDesicion = true);
	}

	escenaActual++;
};

const opcionBoton = (botonEscogido) => {
	if (botonEscogido === "A") {
		// * Opciones botón A
		if (rutaActual === "introduccion" && decisionesTomadas === 0) rutaActual = "ruta1";

		ocultarBotones();
		return;
	}

	// * Opciones botón B
	if (rutaActual === "introduccion" && decisionesTomadas === 0) rutaActual = "ruta2";
	ocultarBotones();
};

const mostrarBotones = () => {
	btnA.style.display = "inline";
	btnB.style.display = "inline";
};

const ocultarBotones = () => {
	btnA.style.display = "none";
	btnB.style.display = "none";
	esDesicion = false;
	escenaActual = 0;
	console.log(`Ruta actual ${rutaActual}`);
	cambiarEscena();
};

btnA.addEventListener("click", () => opcionBoton("A", rutaActual));
btnB.addEventListener("click", () => opcionBoton("B", rutaActual));

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

// Control del navbar responsive.
toggleMenu.addEventListener("click", () => (document.getElementById("mobile-menu").style.width = "100%"));
closeToggleMenu.addEventListener("click", () => (document.getElementById("mobile-menu").style.width = "0%"));
