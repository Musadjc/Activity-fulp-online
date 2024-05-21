// Your Solution code goes here

//Iteration 1: Basic Input/Output & Conditionals
//let driver = prompt("What's name of a driver?");
//let pilot = prompt("What's name of a pilot");
//console.log
//console.log("the driver's name is " + driver + " it has " + driver.length + " characters")
//console.log("the pilot's name is " + pilot + " it has " + pilot.length  + " characters")

//if (driver.length > pilot.length ) {
//    console.log('The ' + driver + ' its the longest')
//} if (pilot.length > driver.length) {
//    console.log ('The ' + pilot + ' its the longest')
//}
//var test = window.prompt("type something here");
//console.log(test);


//Iteration 2: String Loops
//const str = "michael"                   

//const newName = str.split('').join(' ');
//console.log(newName)

//const newName2 = str.split('').join('-');
//console.log(newName2)

//let newName3 = str.split('').reverse('').join(' ').toUpperCase();
//console.log(newName3)


//Iteration 3: Number Conditionals & Loops
//Ejercicio 1
function conditionals() {
    for (let i = 0; i <= 20; i++) {
     console.log(i); // Es lo mismo que number = number + i;
 } 
 }
 //Ejercicio 2
 function conditionals2() {
    for (let i = 1; i <= 128; i+=2) {
     if( i%3 === 0 && i%5 !== 0)
     console.log(i);
 } 
 }
 
 //Ejercicio 3
 function powers() {
     for (let i = 1; i <= 10; i++) { // La declaramos la i. ponemos la condicion de que i es mayor o igual a 10. y que recorra los numeros de 1 en 1.
         console.log(2**i) //El primer valor es el exponete (2) con los simpbolos  exponetes (**) y el segundo valor es el valor a exponer (i) 
     }
 }
 
 powers()
 
 
 //Iteration 4: Bonus Time!