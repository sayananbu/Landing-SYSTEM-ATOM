
$("#navbar-scrollspy").scrollspy({ offset: -50 });

const burger = document.querySelector('.nav-section-mobile__burger-menu')
const navbar = document.querySelector('.nav-section-mobile__navbar')
const overlay = document.querySelector('.menu-overlay')

burger.addEventListener('click',openMenu)

function openMenu(){
	if(burger.classList.contains('menu__opened')){
		burger.classList.remove('menu__opened')
		navbar.classList.remove('navbar__opened')
		overlay.classList.remove('menu-overlay__opened')
	}
	else{
		overlay.classList.add('menu-overlay__opened')
		burger.classList.add('menu__opened')
		navbar.classList.add('navbar__opened')
	}
}