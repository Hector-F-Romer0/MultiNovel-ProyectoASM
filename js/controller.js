const controlDesiciones = (rutaActual, idEscenaActual, mostrarBotones) => {
	if (rutaActual === "introduccion" && idEscenaActual === 10) {
		mostrarBotones();
		console.log("El botón o la tecla espacio no deberían arrojar ningún error.");
		return true;
	} else if (rutaActual === "ruta1" && idEscenaActual === 10) {
		mostrarBotones();
		return true;
	}

	return false;
};

export { controlDesiciones };
