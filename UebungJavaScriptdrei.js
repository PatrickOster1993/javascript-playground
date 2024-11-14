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


