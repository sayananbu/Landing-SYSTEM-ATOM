$("#navbar-scrollspy").scrollspy({ offset: 55 });

const burger = document.querySelector(".nav-section__burger-menu");
const navbar = document.querySelector(".nav-section__navbar");
const overlay = document.querySelector(".menu-overlay");
const logo = document.querySelector(".nav-section__logo");
const links = document.querySelectorAll(".navbar-block__label");
const cards = document.querySelectorAll(".button-block__button-show");

burger.addEventListener("click", openMenu);
navbar.addEventListener("click", (e) => {
  e.stopPropagation();
});
overlay.addEventListener("click", openMenu);

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("navbar__opened")) openMenu();
  });
});

cards.forEach((card) => {
  card.addEventListener("click", createModal);
});

function openMenu() {
  burger.classList.toggle("menu__opened");
  navbar.classList.toggle("navbar__opened");
  overlay.classList.toggle("menu-overlay__opened");
  logo.classList.toggle("white-logo");
}
$(window).on("load", function () {
  $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
});

$(".nav-section__navbar a").bind("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top - 55,
      },
      150
    );
  e.preventDefault();
});

let htmlElem = `<div class="container justify-content-center">
	  <div class="card__modal">
		<div class="modal__title-block">
		  <h3 class="title-block__title title">Название продукта</h3>
		</div>
		<div class="modal__modal-slider">
		  <div class="modal-slider__modal-slider-container">
		  <div
			class="itc-slider"
			data-slider="itc-slider"
			data-loop="true"
			data-autoplay="true"
			data-interval="7000"
		  >
			<div class="itc-slider__wrapper">
			  <div class="itc-slider__items">
				<div class="itc-slider__item modal-slider__item">
				  <img src="img/photos/photo-1.png" alt="" class="item__image">
				</div>
				<div class="itc-slider__item modal-slider__item">
				  <img src="img/photos/photo-2.png" alt="" class="item__image">
				</div>
				<div class="itc-slider__item modal-slider__item">
				  <img src="img/photos/photo-3.png" alt="" class="item__image">
				</div>
				<div class="itc-slider__item modal-slider__item">
				  <img src="img/photos/photo-4.png" alt="" class="item__image">
				</div>
			  </div>
			</div>
			<ol class="itc-slider__indicators">
			  <li class="itc-slider__indicator" data-slide-to="0"></li>
			  <li class="itc-slider__indicator" data-slide-to="1"></li>
			  <li class="itc-slider__indicator" data-slide-to="2"></li>
			  <li class="itc-slider__indicator" data-slide-to="3"></li>
			</ol>
			<button class="itc-slider__btn itc-slider__btn_prev"></button>
			<button class="itc-slider__btn itc-slider__btn_next"></button>
		  </div></div>
		</div>
		<div class="modal__description">
		  <p class="description__text">
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
			  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
		  </p>
	  </div>
	  </div>
	</div>`;
let fillText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsam obcaecati harum nemo blanditiis incidunt tempore quae deserunt magni odit. Harum dolorem et voluptatum nisi quam rem numquam, obcaecati perferendis.
`;
let productsCards = [
  {
    id: 1,
    title: "БДНП",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 2,
    title: "АКНП",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 3,
    title: "АКВКУ",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 4,
    title: "АФСЗ",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 5,
    title: "УКС",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 6,
    title: "АСУЗ ИР",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 7,
    title: "АРОМ",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 8,
    title: "АРМ",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
  {
    id: 9,
    title: "АФАК",
    desc: fillText,
    images: [
      "img/photos/photo-1.png",
      "img/photos/photo-2.png",
      "img/photos/photo-3.png",
      "img/photos/photo-4.png",
    ],
  },
];

function createModal(e) {
  document.body.style = "overflow:hidden;"
  let el = document.createElement("div")
  el.classList.add("card__modal-overlay")
  el.innerHTML += htmlElem;
  document.body.appendChild(el);
  el.addEventListener("click", (e) => {
    document.body.removeChild(e.currentTarget)
    document.body.style = "overflow-y:auto;"
  });
  document.querySelector(".card__modal").addEventListener("click", (e) => {
    e.stopPropagation()
  });
  ItcSlider.createInstances()
}
