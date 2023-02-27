
const burger = document.querySelector('.nav-section__burger-menu')
const navbar = document.querySelector('.nav-section__navbar')
const overlay = document.querySelector('.menu-overlay')
const logo = document.querySelector('.nav-section__logo')

burger.addEventListener('click',openMenu)
navbar.addEventListener('click',e=>{e.stopPropagation()})
overlay.addEventListener('click',openMenu)

function openMenu(){
	if(burger.classList.contains('menu__opened')){
		burger.classList.remove('menu__opened')
		navbar.classList.remove('navbar__opened')
		overlay.classList.remove('menu-overlay__opened')
		logo.classList.remove('white-logo')
	}
	else{
		overlay.classList.add('menu-overlay__opened')
		burger.classList.add('menu__opened')
		navbar.classList.add('navbar__opened')
		logo.classList.add('white-logo')
	}
}

$(document).ready(function () {

	$(window).on('load', function() {
		$('.preloader').fadeOut().end().delay(400).fadeOut('slow');
	  });

	$('.nav-section__navbar a').bind("click", function(e) {
        var anchor = $(this);
			$('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top - 55
	        }, 100);
		e.preventDefault();
		});
});