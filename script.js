const images = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
}, 3000);
