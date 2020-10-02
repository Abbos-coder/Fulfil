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