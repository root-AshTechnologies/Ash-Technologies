const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-nav");

navbarToggler.addEventListener("click", () => {
navbarMenu.classList.toggle("show");
});

/* JS for Contact Form Submission */

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
event.preventDefault();
sendForm(event.target);
});

function sendForm(form) {
const formData = new FormData(form);
const xhr = new XMLHttpRequest();
xhr.open("POST", form.action);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
if (xhr.readyState === 4 && xhr.status === 200) {
form.reset();
alert("Thank you for your message. We will get back to you soon.");
} else if (xhr.readyState === 4 && xhr.status !== 200) {
alert("There was a problem submitting your message. Please try again later.");
}
};
xhr.send(new URLSearchParams(formData).toString());
}

/* JS for Service Cards */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
card.addEventListener("mouseenter", () => {
card.querySelector("i").classList.remove("fa-lightbulb");
card.querySelector("i").classList.add("fa-lightbulb-o");
});

card.addEventListener("mouseleave", () => {
	card.querySelector("i").classList.add("fa-lightbulb");
	card.querySelector("i").classList.remove("fa-lightbulb-o");
});

});

/* JS for Testimonials */

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonialCards = testimonialsContainer.querySelectorAll(".testimonial-card");
const testimonialNavigation = testimonialsContainer.querySelector(".testimonial-navigation");

testimonialCards.forEach((card, index) => {
card.style.left = ${index * 100}%;
});

let activeIndex = 0;

function setActiveIndex(index) {
if (index < 0) {
index = testimonialCards.length - 1;
} else if (index >= testimonialCards.length) {
index = 0;
}
  
  testimonialCards.forEach((card) => {
	card.classList.remove("active");
	card.style.transform = `translateX(-${index * 100}%)`;
});

testimonialCards[index].classList.add("active");

activeIndex = index;

updateNavigation();

}

function updateNavigation() {
testimonialNavigation.querySelector(".active").classList.remove("active");

const activeNavigation = testimonialNavigation.querySelectorAll("button")[activeIndex];
activeNavigation.classList.add("active");
activeNavigation.focus();

}

testimonialNavigation.addEventListener("click", (event) => {
if (event.target.tagName === "BUTTON") {
const index = Array.from(event.target.parentNode.children).indexOf(event.target);
setActiveIndex(index);
}
});

setActiveIndex(activeIndex);

/* JS for Counter */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
counter.innerText = "0";
  
  const updateCounter = () => {
	const target = +counter.getAttribute("data-target");
	const count = +counter.innerText;

	const speed = 200;

	const increment = target / speed;

	if (count < target) {
		counter.innerText = `${Math.ceil(count + increment)}`;
		setTimeout(updateCounter, 1);
	} else {
		counter.innerText = target;
	}
};

updateCounter();

});

/* JS for Back to Top Button */

const backToTopButton = document.querySelector("#back-to-top-button");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 200) {
backToTopButton.classList.add("show");
} else {
backToTopButton.classList.remove("show");
}
});

backToTopButton.addEventListener("click", () => {
window.scrollTo(0, 0);
});




