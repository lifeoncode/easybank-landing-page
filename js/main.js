const logos = document.querySelectorAll('.logo_image');
logos.forEach(logo => {
    logo.addEventListener('click', (e) => {
        window.location.reload();
    })
})






const blogs = document.querySelectorAll('.article');
blogs.forEach(blog => {
    blog.addEventListener('mouseover', hovered);
    blog.addEventListener('mouseout', unhovered);
})

function hovered(e){
    this.classList.add('hovered');
}

function unhovered(e){
    this.classList.remove('hovered');
}














const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', openMenu);
links.forEach(link => {
    link.addEventListener('click', closeMenu);
})
function openMenu(e){
    hamburger.setAttribute('src', './images/icon-close.svg');
    hamburger.removeEventListener('click', openMenu);
    hamburger.addEventListener('click', closeMenu);
    menu.classList.add('open');
}

function closeMenu(e){
    hamburger.setAttribute('src', './images/icon-hamburger.svg');
    hamburger.removeEventListener('click', closeMenu);
    hamburger.addEventListener('click', openMenu);
    menu.classList.remove('open');
}