/*Aufgabe 2
Schreiben Sie ein Programm, das eine Temperatur in **Celsius** in **Fahrenheit** umrechnet und dann anschließend das Ergebnis in 
der Konsole ausgibt. Die Umrechnungsformel lautet wie folgt: `F = 1.8 * C + 32`

mit F: Temperatur in **Fahrenheit**;
sowie C: Temperatur in **Celsius**

> **Anmerkung**: Geben Sie das Ergebnis bitte als Antwortsatz aus! */



//Funktion, um F in C oder C in F umzurechnen. Parameter: (F oder C, umzurechnende Temperatur)
function umrechnen(sys, temp) 
{

    if (sys=="F" || sys=="f") 
    {
        ergebnis= 1.8*temp+32
        console.log(temp," Grad Celsius entsprechen", ergebnis, " Grad Fahrenheit.")
    } 
    else if (sys=="C"|| sys=="c")
    {
        ergebnis=((temp-32)*5/9)
        console.log(temp," Grad Fahrenheit entsprechen", ergebnis, " Grad Celsius.")
    }
    else
    {
        console.log("Falsche Eingabe.")
    }
}

console.log(umrechnen("f",35))