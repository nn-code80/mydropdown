const toggle = document.querySelector('.toggle-button')
const navbar = document.querySelector('.nav-links2');
const hamburger = document.querySelector('.hamburger');


toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('open');
})


console.log(navbar)