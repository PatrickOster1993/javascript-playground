/*Aufgabe 1
Erstellen Sie ein Programm, das Ihren **Namen**, Ihr **Alter** und Ihr **Lieblingsessen** in einem entsprechenden Datentyp speichert. Geben Sie diese Informationen dann in einem Satz aus,
> z. B.: „Hallo Max, du bist 25 Jahre alt und dein Lieblingsessen ist Pizza.“
*/


let person = 
    {
    name: "Nicki",
    alter: 34,
    lieblingsessen: "Pizza",
    }

console.log("Person:", person)
console.log("Hallo "+person.name+", du bist "+ person.alter+ " Jahre alt und dein Lieblingsessen ist "+ person.lieblingsessen+".")