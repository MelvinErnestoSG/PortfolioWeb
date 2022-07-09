const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.about,.portfolio,.container__other-portfolios,.container__slider3D,.service,.sub-service,.container__blogs,.container__timeline,.container__skills,.container__contact,.footer',{delay:200, origin:'bottom'})
