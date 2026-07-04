const images = [
    "Image/5d95f13e1cf39ce95bb9adfdece34879.jpg",
    "Image/67017547f09c00617a771eca6af26a7b.jpg",
    "Image/a002e559ed848d939d2275d343580cec.jpg",
    "Image/ecd52d82c64d15fdb2c9523a0597ce9f.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
}, 3000);