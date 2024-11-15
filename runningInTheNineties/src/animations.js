// animations.js - Animationen (Bewegung einer Box)

let box = document.getElementById("animBox") // Holt das DOM-Element für die animierte Box
let position = 0 // Startposition der Box

// Diese Funktion wird alle 20 Millisekunden aufgerufen und bewegt die Box
setInterval(function () {
  position += 3 // Erhöht die Position der Box um 2 Pixel
  box.style.left = position + "px" // Setzt die linke Position der Box

  // Wenn die Box das Ende des Fensters erreicht, wird sie wieder von links anfangen
  if (position > window.innerWidth) {
    position = -100 // Setzt die Position zurück, sodass die Box wieder von links startet
  }
}, 5) // Intervall von 20 Millisekunden
