function fizzBuzz(){  
  const arrayOfOneToAHundred = Array.from({length: 100}, (emptyValue, i) => i + 1);
    /* this means create an array with a length of 100 (the first argument on Array.from) and starts a loop
    where emptyValue is never used, but i+1 is the incrementing value of each array element.*/

    for (let i = 0; i < arrayOfOneToAHundred.length; i++){
        if(arrayOfOneToAHundred[i] % 3 == 0 && arrayOfOneToAHundred[i] % 5 == 0){
            console.log("FizzBuzz")
        }
        else if(arrayOfOneToAHundred[i] % 3 == 0){
            console.log("Fizz")
        }
        else if(arrayOfOneToAHundred[i] % 5 == 0){
            console.log("Buzz")
        }
        else{
            console.log(arrayOfOneToAHundred[i])
        }
    }
}