//Iteration 1
//1.1/ removeFirstAndLastChar(string)
// function removeFirstAndLastChar(strings) { //aqui hago la solucion
//     return strings.slice(1,-1);
//    }
// const result = '123456789'
// console.log(removeFirstAndLastChar(result)) // 2345678

//1.2 moreNerdy(string)

// function moreNerdy(strings) {
// let word = strings.replaceAll("a"=== "4","A"==="4","e"==="3","E"==="3","l"==="1")
// console.log(word)
// }
// moreNerdy("FundamentAls") 


//1.3 noVowels(string).
// const noVowels = string => string.replace(/[aeiou]/ig, '');
// console.log(noVowels('HELLO reboot')); // Output: HLL rbt

  
 //Iteration 2 - Nickname Generator 
//  const nicknameGenerator = nickname => (/[aeiou]/g.test(nickname[2])) ? nickname.slice(0, 4) : nickname.slice(0, 3);
// console.log(nicknameGenerator('Douglas')); // Output: Doug


 //Iteration 3 High and low El primer caso lo coge pero el segundo y tercero NO !!! "1 2 -3 4 5" and "1 9 3 4 -5"
//  const numbers = "5 2 3 4 1";
//  const [high, ...low] = numbers.split(' ').sort((a, b) => b - a);
//  console.log(`${high} ${low.pop()}`); // Output: 5 1
 

//  //Iteration 4- Reverse it


 const salute = "Hello World";
console.log(salute.split(' ').reverse().join(' ')); // Output: World Hello
