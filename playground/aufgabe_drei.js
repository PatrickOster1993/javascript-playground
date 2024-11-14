// ============================
// Aufgabe 3
// ============================

// Konsole bereinigen
console.clear()

console.log("#################")
console.log("### Aufgabe 3 ###")
console.log("#################")

// Lösung über for-Schleife
for (let i = 1; i <= 100; i++) {
  let output = "" // Initialisiere einen leeren String

  if (i % 3 === 0) {
    output += "Fizz" // Füge "Fizz" hinzu, falls i durch 3 teilbar ist
  }
  if (i % 5 === 0) {
    output += "Buzz" // Füge "Buzz" hinzu, falls i durch 5 teilbar ist
  }

  // Gib entweder "Fizz", "Buzz", "FizzBuzz" oder die Zahl selbst aus
  console.log(output || i)
}
