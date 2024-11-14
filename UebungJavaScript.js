
/*
### Aufgabe 1
Erstellen Sie ein Programm, das Ihren **Namen**, Ihr **Alter** und Ihr **Lieblingsessen** in einem entsprechenden Datentyp speichert. Geben Sie diese Informationen dann in einem Satz aus,
> z. B.: „Hallo Max, du bist 25 Jahre alt und dein Lieblingsessen ist Pizza.“
*/

let name = "Dirk Scheffler"
let alter = "fast 12"
let lieblingsessen = "Pizza"


console.log("Halo I bims 1", name, ", I bim", alter, "umngdt m1 Liblinxessn is", lieblingsessen)


/*
### Aufgabe 2
Schreiben Sie ein Programm, das eine Temperatur in **Celsius** in **Fahrenheit** umrechnet und dann anschließend das Ergebnis in der Konsole ausgibt. 
Die Umrechnungsformel lautet wie folgt: `F = 1.8 * C + 32`
mit F: Temperatur in **Fahrenheit**;
sowie C: Temperatur in **Celsius**

> **Anmerkung**: Geben Sie das Ergebnis bitte als Antwortsatz aus!
*/

let celsius = 0;
let fahrenheit = 0;

function celsiustofahrenheit(celsius) {
    let F = celsius * 1.8 + 32;
    console.log(celsius, "Grad Celsius sind:", F, "Grad Fahrenheit");
    return F;
}

function fahrenheittocelsius(fahrenheit) {
    let C = (fahrenheit - 32) / 1.8;
    console.log(fahrenheit, "Grad Fahrenheit sind:", C, "Grad Celsius");
    return C;
}

// Funktion zur Eingabeaufforderung
function converter() {
    const prompt = require('prompt-sync')(); // Hier verwende ich prompt-sync für Node.js
    console.log("Bitte angeben, ob Celsius oder Fahrenheit umgerechnet werden soll (geben Sie 'C' oder 'F' ein):");

    let userInput = prompt().toUpperCase();

    if (userInput === 'C') {
        console.log("Bitte geben Sie die Temperatur in Celsius ein:");
        celsius = parseFloat(prompt());
        celsiustofahrenheit(celsius);
    } else if (userInput === 'F') {
        console.log("Bitte geben Sie die Temperatur in Fahrenheit ein:");
        fahrenheit = parseFloat(prompt());
        fahrenheittocelsius(fahrenheit);
    } else {
        console.log("Ungültige Eingabe. Bitte geben Sie 'C' oder 'F' ein.");
    }
}

// Aufruf der Konvertierungsfunktion
converter();

/*
### Aufgabe 3
Implementieren Sie das klassische **FizzBuzz-Spiel**. Schreiben Sie hierzu ein Programm, das die Zahlen von 1 bis 100 ausgibt, 
aber für Vielfache von 3 soll es **„Fizz“** ausgeben, für Vielfache von 5 **„Buzz“** und für Vielfache von sowohl 3 als auch 5 **„FizzBuzz“**.
> **Tipp**: Wie wäre es mit dem Modulo-Operator?
*/

for (i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) { console.log("Buzz") }
    else{
        console.log(i)
    }
};
// HIER KÖNNTE IHRE WERBUNG STEHEN //


