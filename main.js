const toggle = document.querySelector('.toggle-button')
const navbar = document.querySelector('.nav-links2');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
})


console.log(navbar)