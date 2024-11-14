console.log("##################")
console.log("### Playground ###")
console.log("##################")

// ============================
// Anfänger
// ============================

// Einfacher Kommentar (1 Zeile)

/*
Kommentar
über
mehrere
Zeilen
*/

// Variablen und Konstanten
let x = 42 // Kann später geändert werden
x = 10
const PI = 3.14 // Bleibt unverändert
console.log("Variable:", x)
console.log("Konstante:", PI)

// Datentypen
let zahl = 11 // Number (Sowohl Float als auch Integer werden als Number behandelt)
let text = "Hallo, JavaScript!" // String
let wahrheitswert = true // Boolean
let nichts = null // Null
let undefiniert // Undefined, noch keinen Wert zugewiesen
console.log("Zahl:", zahl, "Datentyp:", typeof zahl)
console.log("Text:", text, "Datentyp:", typeof text)
console.log("Wahrheitswert:", wahrheitswert, "Datentyp:", typeof wahrheitswert)
console.log("Nichts:", nichts, "Datentyp:", typeof nichts)
console.log("Undefiniert:", undefiniert, "Datentyp:", typeof undefiniert)

// toUpperCase (Großbuchstaben)
let upperText = text.toUpperCase()
console.log("In Großbuchstaben:", upperText)

// toLowerCase (Kleinbuchstaben)
let lowerText = text.toLowerCase()
console.log("In Kleinbuchstaben:", lowerText)

// Bedingung
if (zahl > 50) {
  console.log("Die Zahl ist größer als 50")
} else if (zahl > 30) {
  console.log("Die Zahl ist größer als 30, aber 50 oder kleiner")
} else {
  console.log("Die Zahl ist 30 oder kleiner")
}

let istRichtig = true
let istFalsch = false

// UND-Operator (&&)
if (istRichtig && istFalsch) {
  console.log("Beide sind wahr")
} else {
  console.log("Mindestens einer ist falsch")
}

// ODER-Operator (||)
if (istRichtig || istFalsch) {
  console.log("Mindestens einer ist wahr")
} else {
  console.log("Beide sind falsch")
}

// Schleifen
// For-Schleife
for (let i = 0; i < 5; i++) {
  console.log("For-Schleife, Durchlauf:", i)
}

let count = 0

// While-Schleife
while (count < 3) {
  console.log("While-Schleife, Zähler:", count)
  count++
}

// do...while-Schleife
count = 0 // Zurücksetzen des Zählers
do {
  console.log("do...while-Schleife, Zähler:", count)
  count++
} while (count < 3)

// ============================
// Fortgeschrittene
// ============================

// Objekte
let person = {
  name: {
    vorname: "max",
    nachname: "mustermann",
  },
  alter: 25,
  hobby: "Programmieren",
}

console.log("Person:", person)
console.log("Name der Person:", person.name.vorname)

let beispielText = "      JavaScript ist mächtig!  "

// Trim (Whitespace entfernen)
let ohneWhitespace = beispielText.trim()
console.log("Ohne Whitespace:", ohneWhitespace)

// includes (Substring prüfen)
let enthältJavaScript = beispielText.includes("JavaScript")
console.log("Enthält 'JavaScript'?", enthältJavaScript)

// slice (Teilstring extrahieren)
let substring = beispielText.slice(0, 10)
console.log("Substring (0, 10):", substring)

// replace (Text ersetzen)
let neuerText = beispielText.replace("mächtig", "cool")
console.log("Ersetzter Text:", neuerText)
// weitere Methoden zur String-Manipulation verfügbar --> IDE hilft!

// Ternärer Operator
let ergebnis = zahl > 30 ? "Größer als 30 (ternär)" : "30 oder kleiner (ternär)"
console.log("Ergebnis (ternär):", ergebnis)

// Arrays
let zahlenArray = [1, 2, 3, 4, 5]
console.log("Array:", zahlenArray[1])

// Array durchlaufen
for (let zahl of zahlenArray) {
  console.log("Zahl aus dem Array:", zahl)
}

// join (Array in String umwandeln)
let arrayString = zahlenArray.join(", ")
console.log("Array als String:", arrayString)

// push (Neues Element ans Ende hinzufügen)
zahlenArray.push(6)
console.log("Array nach push:", zahlenArray)

// pop (Letztes Element entfernen)
zahlenArray.pop()
console.log("Array nach pop:", zahlenArray)

// shift (Erstes Element entfernen)
zahlenArray.shift()
console.log("Array nach shift:", zahlenArray)

// unshift (Neues Element am Anfang hinzufügen)
zahlenArray.unshift(0)
console.log("Array nach unshift:", zahlenArray)

// reverse (Array umdrehen)
zahlenArray.reverse()
console.log("Array nach reverse:", zahlenArray)
// weitere Array-Methoden verfügbar --> IDE hilft!

// Funktionen
function addieren(a, b) {
  return a + b
}
let summe = addieren(5, 10)
console.log("Ergebnis der Funktion addieren:", summe)

// Modulo-Operator
let a = 17
let b = 5
console.log("17 % 5 =", a % b) // Gibt den Rest der Division zurück (17 geteilt durch 5)

// Einfache Fehlersuche
try {
  let fehler = nichtDefiniert + 1 // Diese Variable ist nicht definiert
} catch (error) {
  console.error("Fehler gefunden:", error.message) // auch console.log möglich
} finally {
  console.warn("Immer schön Fehler abfangen!") // auch console.log möglich
}

// ============================
// Experten (nicht erforderlich)
// ============================

// Set-Datentyp (nur eindeutige Werte)
let uniqueValues = new Set([1, 2, 3, 2, 1])
console.log("Set-Datentyp (nur eindeutige Werte):", uniqueValues)

// Symbol-Datentyp
let id1 = Symbol("id")
let id2 = Symbol("id")
console.log("Symbol id1:", id1)
console.log("Symbol id2:", id2)
console.log("id1 === id2:", id1 === id2) // Immer false, da Symbole einzigartig sind
/*
Hinweis: "==" (lose Gleichheit) und "===" (strikte Gleichheit) unterscheiden sich dahingehend,
dass bei "==" z. B. 5 und "5" als true gewertet werden,
während bei "===" Wert und Datentyp gleich sein müssen!
Bei Symbolen allerdings immer "false" wegen ihrer Einzigartigkeit (selbst bei strikter Gleichheit)!
*/

// Arrow-Funktionen
let quadrieren = (num) => num * num
console.log("Quadrat von 4 (Arrow-Funktion):", quadrieren(4))

// map-Methode
let verdoppelt = zahlenArray.map((num) => num * 2) // Nutzt Arrow-Funktion
console.log("Verdoppelte Werte (map):", verdoppelt)

// Spread-Operator für Arrays
let kopiertesArray = [...zahlenArray, 6, 7]
console.log("Spread-Operator für Array:", kopiertesArray)

// sort (Array sortieren)
let sortiertesArray = [3, 1, 4, 5, 2]
sortiertesArray.sort((a, b) => a - b)
console.log("Sortiertes Array:", sortiertesArray)

// find (Erstes Element finden, das eine Bedingung erfüllt)
let ersteZahlÜber3 = zahlenArray.find((num) => num > 3)
console.log("Erste Zahl > 3:", ersteZahlÜber3)

// filter (Array mit Bedingung filtern)
let gefilterteZahlen = zahlenArray.filter((num) => num > 3)
console.log("Gefilterte Zahlen > 3:", gefilterteZahlen)
