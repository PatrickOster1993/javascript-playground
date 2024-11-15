function celsiusCalculator(){
    let celsiusValue = 23
    let fahrenheitValue = 1.8 * celsiusValue + 32

    console.log(celsiusValue, "°C equals", fahrenheitValue, "°F.")
}

// Die eigentliche Aufgabe: 
let a = 5
let b = a++
console.log(a, "+", ++b)
// Überprüfung 1
let zahl1 = 5
let zahl2 = zahl1++
console.log(zahl1,"+", zahl2)
// Überprüfung 2
let x = 5
let y = x
console.log(x, "+",++y)