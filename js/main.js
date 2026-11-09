// Menú móvil
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Cierra el menú al elegir una sección
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();
