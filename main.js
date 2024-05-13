
const navMenu = document.getElementById("nav_menu"),
        navToggle = document.getElementById("nav_toggle_btn"),
        navClose = document.getElementById("nav_close_btn")

if (navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

if (navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

// remove menu mobile

const navLink = document.querySelectorAll(".nav-list-link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav_menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

const images = [
    { src: 'image2.jpg', alt: 'Ankara, BTK Yapay Zeka Zirvesi 2024', info: 'Ankara, Yapay Zeka Etkinliği' },
    { src: 'image.jpg', alt: 'Ankara, Şinasi Sahnesi', info: 'Ankara, Şinasi Sahnesi' },
    { src: 'image3.jpg', alt: 'Ankara, Göksu Parkı', info: 'Ankara, Göksu Parkı' },
    { src: 'image4.jpg', alt: 'Samsun', info: 'Samsun' },
];
let currentImageIndex = 0;
document.getElementById('next-image').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageElement = document.getElementById('slider-image');
    const infoElement = document.getElementById('image-info');
    imageElement.src = images[currentImageIndex].src;
    imageElement.alt = images[currentImageIndex].alt;
    infoElement.textContent = images[currentImageIndex].info;
});