// animations.js - Animationen (Bewegung einer Box)

let box = document.getElementById("animBox") // Holt das DOM-Element für die animierte Box
let position = 0 // Startposition der Box

// Diese Funktion wird alle 20 Millisekunden aufgerufen und bewegt die Box
setInterval(function () {
  position += 2 // Erhöht die Position der Box um 2 Pixel
  box.style.left = position + "px" // Setzt die linke Position der Box

  // Wenn die Box das Ende des Fensters erreicht, wird sie wieder von links anfangen
  if (position > window.innerWidth) {
    position = -100 // Setzt die Position zurück, sodass die Box wieder von links startet
  }
}, 20) // Intervall von 20 Millisekunden

let box2 = document.getElementById("animBox2") // Holt das DOM-Element für die animierte Box 2
let position2 = 0 // Startposition der Box2

// Diese Funktion wird alle 20 Millisekunden aufgerufen und bewegt die Box2
setInterval(function () {
  position2 += 2 // verringert die Position der Box2 um 2 Pixel
  box2.style.right = position2 + "px" // Setzt die linke Position der Box

  // Wenn die Box das Ende des Fensters erreicht, wird sie wieder von links anfangen
  if (position2 > window.innerWidth) {
    position2 = +110 // Setzt die Position zurück, sodass die Box wieder von links startet
  }
}, 20) // Intervall von 20 Millisekunden
