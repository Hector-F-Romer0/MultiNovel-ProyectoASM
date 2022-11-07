const toggleMenu = document.getElementById("toggle-menu");
const closeToggleMenu = document.getElementById("close-toggle-menu");

// Control del navbar responsive.
toggleMenu.addEventListener("click", () => (document.getElementById("mobile-menu").style.width = "100%"));
closeToggleMenu.addEventListener("click", () => (document.getElementById("mobile-menu").style.width = "0%"));
