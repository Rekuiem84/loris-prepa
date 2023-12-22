const Burger = document.querySelector(".burger-cont");
const NavMenu = document.querySelector(".nav__list");

Burger.addEventListener("click", () => {
	Burger.classList.toggle("open");
	NavMenu.classList.toggle("open");
});

// function validateForm() {
// 	var response = grecaptcha.getResponse();

// 	if (response.length === 0) {
// 		// Le reCAPTCHA n'est pas validé, empêchez la soumission du formulaire
// 		alert("Veuillez cocher la case 'Je ne suis pas un robot'");
// 		return false;
// 	}

// 	// Le reCAPTCHA est validé, autorisez la soumission du formulaire
// 	return true;
// }
