const Burger = document.querySelector(".burger-cont");
const NavMenu = document.querySelector(".nav__list");

Burger.addEventListener("click", () => {
	Burger.classList.toggle("open");
	NavMenu.classList.toggle("open");
});
