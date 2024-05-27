// //1.1/ sumPositiveNumbers(array)
// function sumPositiveNumbers(arr) {
//     let newArr = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             newArr += arr[i]
//         }
//     }
//     return newArr
// }
// console.log(sumPositiveNumbers([1,-4,7,12]))
// //E.g. [1,-4,7,12] => 1 + 7 + 12 = 20


// //1.2/ countThatSheep(array)
// function countThatSheep(arr1) {
//   let newArr1 = 0 
//   for(let i = 0; i < arr1.length; i++) { 
//     if(arr1[i] === true){ 
//       newArr1 ++;     
//     }
//   }
//   return newArr1
// }
// console.log(countThatSheep([true,  true,  true,  false, true, true, true, true, true, false, true, false]))


// //1.3 countThatSheepV2(array)
// function countThatSheepV2(arr2) {
//   let newArr2 = 0 
//   for(let i = 0; i < arr2.length; i++) {
//     if(arr2[i][i] === true){
//       newArr2 +-arr2[i]
//   }
// }
// return newArr2
// }
// console.log(countThatSheepV2 ([
//   [true,  true,  true,  false, true],
//   [true,  false,  true,  false, true],
//   [true,  false,  true,  false, true],
// ]))



//1.4 toReverse(string).
// const numbers = [348597]
// function toReverse (){
//   let  reversedString = ''
//   for (let i=numbers.length -1; i>=0 ; i--) {
//     reversedString += `${numbers[i]} `
//   }
//   return reversedString
// }
// console.log(toReverse())


//Iteration 2 - Count until i want
// function countBy(x, n) {
//  
//   if (x <= 0 || n <= 0 || typeof x !== 'number' || typeof n !== 'number') {
//     return "Por favor, ingresa números positivos mayores que 0 para ambas variables.";
  //}

  // Inicializar un array para almacenar los múltiplos
//   let result = [];

  // Iterar n veces y agregar los múltiplos de x al array
//   for (let i = 1; i <= n; i++) {
//     result.push(x * i);
//   }

//   return result;
// }
// console.log(countBy(1, 10));


//Iteration 3 - Shorter first
// function nameShort(array){
// array.sort(function(a, b) {
//   return a.length - b.length; 
// });
// return array; 

// }

// const newArray = ["Telescopes", "Glasses", "Eyes", "Monocles"]; //Ejemplo de uso
// const result = nameShort(newArray);
// console.log(result);