//Variablen definieren
let temperature_fahrenheit = 0.0
let temperature_celsius    = 5.0

//calculate function
function celsius_to_fahrenheit()
{
    temperature_fahrenheit = 1.8 * temperature_celsius + 32
}
//call the function
celsius_to_fahrenheit()
//output the fahrenheit temperature
console.log("Umrechnung erfolgt! ==", temperature_celsius + "°C" , "sind", temperature_fahrenheit, "°F")