

// function sum(a,b){
//     add = a+b;
//     console.log(add);
// }
// sum(2,7);

// var sum = function (a,b){
//     add= a+b;
//     console.log(add);
// }
// console.log(sum);

// let a = 10;
// function b(){
//     console.log(a);
//     let a = 20;
// }
// b();

// var a =10; d = 15; c= 10;
//  function b(){
//    a = 15;
//    console.log(a);
//    console.log(c);
//    var c =20;
// }
// b();
// console.log(a); 
// console.log(c);

// let a=10;

// function b(){
//     console.log(a)
//     let a= 20;
// }
// b();


// let a=10;
// function b(){
//      a= 20;
//     // console.log(a);
     
//      console.log(a);

// }

// b()


// var a=10; d=20; c=30;
//  function b(){
//       a=50;
//     console.log(a);
//     console.log(d);
//      d=50;

//  }
//  console.log(c);
//  b();

// for(let i=1; i<=5; i++){
//   for( let j=1; j<=i; j++){
//     document.write("*");
//   }
//   document.write("<br/>");
// }

// let n = 5; // you can take input from prompt
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";
//   } 

//   string += "<br/>";
// }
// console.log(string);


// let n = 4;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n=4;
// let string="";

// for(let i=1; i<=n; i++){

    
// }

// var dis= function(){
//     console.log
//     ("hello");
// };
// dis();

// var i= 10;
// function show(){
//     var j=20;
//     console.log(j+ "<br>");
//     console.log(i+ "<br>");

// }
// show();
function show(){
var j="hello";
console.log( j);
function innerFun(){
    var k="yes";
    console.log(k);
    console.log(j);

}
innerFun()
console.log(j);
console.log(k);
}
show();
