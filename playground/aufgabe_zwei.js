// ============================
// Aufgabe 2
// ============================

// Konsole bereinigen
console.clear()

console.log("#################")
console.log("### Aufgabe 2 ###")
console.log("#################")

// Temperatur in Celsius
let celsius = 25

// Funktion zur Umrechnung in Fahrenheit
function getFahrenheit(c) {
  const f = 1.8 * celsius + 32
  return f
}

// Ausgabe
console.log(
  `Die Temperatur von ${celsius}°C entspricht ${getFahrenheit(celsius)}°F.`
)
