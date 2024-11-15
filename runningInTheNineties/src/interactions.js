// interactions.js - Ereignisinteraktionen (z.B. Button-Klick)

// Füge dem Button einen Klick-Listener hinzu
document.getElementById("clickButton").addEventListener("click", function () {
  // Zeigt eine Alert-Nachricht an
  alert("Du hast den Button in den 90ern geklickt!")
  const iframe = document.getElementById("youtube-audio");
  iframe.style.display = "block"; // Zeigt das versteckte IFrame für den Browser, falls erforderlich.
  iframe.src = iframe.src; // Lädt die IFrame-Quelle neu, um sicherzustellen, dass die Wiedergabe startet.
  this.style.display = "none";
  // Öffnet den YouTube-Link in einem neuen Tab
  // window.open("https://www.youtube.com/watch?v=BJ0xBCwkg3E", "_blank")
})
