// 1.Write an improved version of hello world that says hello firstName lastName
const firstName = "Maria"; 
const lastName = "Ortiz"; 
console.log('hello firstName, lastName');

const firstName = "Maria"; 
const lastName = "Ortiz"; 
const greeting = "Hello"; 
console.log('hello Maria Ortz');

const firstName = "Maria"; 
const lastName = "Ortiz"; 
const greeting = "Hello"; 
console.log("Hello" + firstName + "" + lastName)

//string interpolation 
console.log('Hello ${firstName} ${lastName}')


// 2.Display the sum of 5 + 10, using two variables: x and y.

const x = 5; 
const y = 10; 
console.log(x + y)

// 3.Create a variable called z, assign x + y to it, and log the result.
const x = 5; 
const y = 7;
const z = x + y; 
console.log(z)
 
// 4.Write a program that takes a temperature in Celsius degrees, then 
//logs it in Fahrenheit degrees. The conversion formula is [°F] =
//[°C] x 9/5 + 32.

let C_degrees = 40; 
let F_degrees = C_degrees * (9/5) + 32; 
console.log(F_degrees)

//5.Look at the following code and try to predict the final values of its variables. Run the code too see if you were correct

   // ·     let a = 2;
   // ·     a -= 1;
   // ·     a++;
   // ·     let b = 8;
   // ·     b += 2;
   // ·     const c = a + b * b;
   // ·     const d = a * b + b;
   // ·     const e = a * (b + b);
   // ·     const f = a * b / a;
   // ·     const g = b / a * a;
   // ·     console.log(a, b, c, d, e, f, g);

let a = 2; 
console.log(a); 
a -= 1; //decremental operator and reassign
console.log(a); 
a--; //decremental operator
console.log(a); 
a +=4; //incremental and reassign 
console.log(a) 

a++; //incremental operator
console.log(a) //3 
let b = 8; //8
console.log(b) 

const c = a + b * b; 
console.log(c) 

const d = a * b + b; 
console.log(d)

const e = a * (b + b); 
console.log(e)

const f = a * b / a; 
console.log(f) 

const g = b / a * a; 
console.log(g)


// 6.    Bonus: Swap the values of the 2 variables without creating any new variables:
// let firstNumber = 4;
// let secondNumber = 9;