
const image = document.getElementById('rolling-image');
let angle = 0;
let positionX = window.innerWidth;

function rollImage() {
    angle -= 5;
    positionX -= 4;

    image.style.transform = `translateX(${positionX}px) rotate(${angle}deg)`;

    if (positionX < -image.width) {
        positionX = window.innerWidth;
    }

    requestAnimationFrame(rollImage);
}

// Starte die Animation sofort
rollImage();