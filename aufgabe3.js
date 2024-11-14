/* Aufgabe 3
Implementieren Sie das klassische **FizzBuzz-Spiel**. Schreiben Sie hierzu ein Programm, das die Zahlen von 1 bis 100 ausgibt, 
aber für Vielfache von 3 soll es **„Fizz“** ausgeben, für Vielfache von 5 **„Buzz“** und für Vielfache von sowohl 3 als auch 5 **„FizzBuzz“**.

> **Tipp**: Wie wäre es mit dem Modulo-Operator? */

/*// Modulo-Operator
let a = 17
let b = 5
console.log("17 % 5 =", a % b) // Gibt den Rest der Division zurück (17 geteilt durch 5)*/

for (let i = 1; i <= 100; i++) 
{
    if (i%3 !=0 && i%5 !=0)
    {
    console.log(i)
    }
    else if (i%3 ==0 && i%5 ==0)
    {
        console.log("FizzBuzz")
    }
    else if (i%5 == 0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log("Fizz")
    }
}