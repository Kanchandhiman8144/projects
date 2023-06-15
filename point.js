// function findMissingNumbers(arr, startRange, endRange) {
//   // Create an array to store missing numbers
//   const missingNumbers = [];

//   // Iterate through the range of numbers
//   for (let i = startRange; i <= endRange; i++) {
//     // Check if the number is present in the given array
//     if (i==10) {
//       missingNumbers.push(i);
//     }
//   }

//   return missingNumbers;
// }

// // Example usage
// const numbers = [1, 3, 5, 7, 10];
// const startRange = 1;
// const endRange = 10;

// const missingNumbers = findMissingNumbers(numbers, startRange, endRange);
// console.log(missingNumbers );


// ...............mergerd................


// const merge = (first,second,) =>{
//   for( let i=0; i<second.length; i++){
//     first.push(second[i]);
//   }
//   return first;
// }
 
// let merged = merge(merge ([1,2,3],[4,5,6]),[7,8,9]);
// console.log(merged);



// .........factorial........

// let num = 6;
// for ( let i= num; i > 1;){
//     i= i-1;
//     var main = num * i;
//     num = main;
// }
// console.log(main);



// let str = 'kanchan,rekha,subhash chand'
// let count = 0;
// const vowels = ['a','e','i','o','u']

// for (let s of str.toLowerCase()){
//     if(vowels.includes(s)){
//         count++
//     }
// } 
// console.log(count)

let n = 5; // you can take input from prompt
let string = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  string += "<br>";
}
console.log(string);


// let num=10;
// for(let i=2; i< num ; i++){
//   if(num % i==0) {
//     console.log("not a prime number");
//   }
//   else{
//     console.log("prime number");
//   }
// }

let a=5;
let b=10;

[a,b]=[b,a];

console.log('the value of a is ${a} and the value of b is ${b}.');