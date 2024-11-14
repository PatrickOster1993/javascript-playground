console.log("Aufgabe 3")
for (let i = 1; i <= 100; i++) {
    // beim kleinsten gemeinsamen Nenner von 3 und 5 also 15, ausgabe "FizzBuzz"
    if(i%3==0 && i%5==0 ){
       console.log("FizzBuzz") 
    }// Jede 5.Stelle "Buzz"
    else if (i%5==0 ){
        console.log("Buzz")
    }// Jede 3.Stelle "Fizz"
    else if (i%3==0){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }
    
  }