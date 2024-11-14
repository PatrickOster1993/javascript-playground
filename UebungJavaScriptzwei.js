

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


