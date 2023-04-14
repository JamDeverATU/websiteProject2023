const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('animate');

  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
});

// JavaScript for Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function autoSlides() {
  plusSlides(1);
  setTimeout(autoSlides, 5000); // Change image every 5 seconds
}

setTimeout(autoSlides, 5000); // Start slideshow automatically


const form = document.getElementById('contact-form');
const nameInput = document.getElementById('fname');
const emailInput = document.getElementById('lname');
const messageInput = document.getElementById('subject');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (nameInput.value === '' || nameInput.value == null) {
    messages.push('Name is required');
  }
  if (emailInput.value === '' || emailInput.value == null) {
    messages.push('Email is required');
  }
  if (messageInput.value === '' || messageInput.value == null) {
    messages.push('Message is required');
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
