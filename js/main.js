const burger = document.querySelector(".navbar__burger");
const navLinks = document.querySelector(".navbar__links");

burger.addEventListener("click", (e) => {
   burger.classList.toggle("active");
   navLinks.classList.toggle("hide");
});

const loading = document.querySelector('.loading');

// loading.style.display = 'none'

setTimeout(() => {
	loading.style.display = 'none'
}, 2000);




// goTop btn script 
const goTop = document.querySelector('.top'),
		navbar = document.querySelector('#navbar')

function scrollTo(element) {
	window.scroll({
	  left: 0,
	  top: element.offsetTop,
	  behavior: "smooth"
	});
}
 
goTop.addEventListener('click', (e) => {
	scrollTo(navbar)
})
