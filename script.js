const toggleNavBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav__list');

toggleNavBtn.onclick = () => {
    nav.classList.toggle('nav--visible')
}