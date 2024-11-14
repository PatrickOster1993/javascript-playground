 for(let x = 1; x <=100; x++)
 {
    //use variables to calculate Modulo and safe the result
    modulo_drei           = x % 3
    modulo_fünf           = x % 5
    
    if(modulo_drei == 0)
    {
        console.log("Fizz")
    }
    
    else if ( modulo_fünf == 0)
    {
        console.log("Buzz")
    }
    
    if ( modulo_drei == 0 && modulo_fünf == 0)
    {
        console.log("FizzBuzz")
    }
    
    else
    {
        console.log(x)
    }
}