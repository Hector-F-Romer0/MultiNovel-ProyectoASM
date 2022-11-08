const controlDesiciones = (rutaActual, idEscenaActual, mostrarBotones) => {
	if (rutaActual === "introduccion" && idEscenaActual === 10) {
		mostrarBotones();
		return true;
	} else if (rutaActual === "ruta1" && idEscenaActual === 7) {
		mostrarBotones();
		return true;
	} else if (rutaActual === "ruta1" && idEscenaActual === 12) {
		mostrarBotones();
		return true;
	} else if (rutaActual === "ruta3" && idEscenaActual === 5) {
		mostrarBotones();
		return true;
	} else if (rutaActual === "ruta5" && idEscenaActual === 4) {
		mostrarBotones();
		return true;
	} else if (rutaActual === "ruta5" && idEscenaActual === 8) {
		mostrarBotones();
		return true;
	} else if (rutaActual === "ruta7" && idEscenaActual === 8) {
		mostrarBotones();
		return true;
	}

	return false;
};

export { controlDesiciones };
