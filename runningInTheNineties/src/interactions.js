// interactions.js - Ereignisinteraktionen (z.B. Button-Klick)

// Füge dem Button einen Klick-Listener hinzu
document.getElementById("clickButton").addEventListener("click", function () {
  // Zeigt eine Alert-Nachricht an
  alert("Du hast den Button in den 90ern geklickt!")

  // Öffnet den YouTube-Link in einem neuen Tab
  window.open("https://z0r.de/2035", "_blank")
})

document.getElementById("clickButton2").addEventListener("click", function () {
  // Zeigt eine Alert-Nachricht an
  alert("Schäm dich") 

  // Öffnet den YouTube-Link in einem neuen Tab
  window.open("https://z0r.de/2035", "_blank")
})

