function umrechnen( in_unit, in_tmp ) 
{

    if ( in_unit=="F" || in_unit=="f" ) 
    {
        erg= 1.8*in_tmp+32
        console.log( in_tmp," Grad Celsius ist", erg, " Grad Fahrenheit." )
    } 
    else if (in_unit=="C" || in_unit=="c")
    {
        erg=(( in_tmp-32 ) *5/9 )
        console.log( tmp," Grad Fahrenheit ist", erg, " Grad Celsius." )
    }
    else
    {
        console.log( "falsche eingabe." )
    }
}

console.log(umrechnen( "C", 7 ))