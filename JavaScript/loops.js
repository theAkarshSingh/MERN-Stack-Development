const input = require("readline-sync");

// Q1. Write a program to print the multiplication table of a given number using a loop.
let num1 = parseInt(input.question("Enter a number for which you want the multiplication table: "));
for(let i=1; i<=10; i++){
    console.log(num1 + " x " + i + " = " + (num1*i));
}
console.log();

// Q2. Calculate the factorial of a given number using for loop.
let num2 = parseInt(input.question("Enter a number to calculate its factorial: "));
let factorial = 1;
for(let i=1; i<=num2; i++){
    factorial *= i;
}
console.log("Factorial of " + num2 + " is: " + factorial);
console.log();

// Q3. Find the sum of the first n natural numbers using a loop.
let n = parseInt(input.question("Enter the value of n to calculate the sum: "));
let sum = 0;
for(let i=1; i<=n; i++){
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);
console.log();

// Q4. Write a program to reverse the digits of a number using a loop.
let num4 = parseInt(input.question("Enter a number to reverse: "));
let reversed = 0;
while(num4 !== 0){
    reversed = reversed * 10 + num4 % 10;
    num4 = Math.floor(num4 / 10);
}
console.log("Reversed number is: " + reversed);
console.log();

// Q5. Print all even numbers from 1 to 50 using a loop.
console.log("Even numbers from 1 to 50:");
for(let i=1; i<=50; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log();

// Q6. Count the number of digits in a given number using a loop.
let num6 = parseInt(input.question("Enter a number to count its digits: "));
let count = 0;
while(num6 !== 0){
    count++;
    num6 = Math.floor(num6 / 10);
}
console.log("Number of digits is: " + count);
console.log();

// Q7. Generate the first n terms of the Fibonacci sequence using a loop.
let n1 = parseInt(input.question("Enter the number of terms for the Fibonacci sequence: "));
let a = 0, b = 1;
console.log("Fibonacci sequence:");
for(let i = 0; i < n1; i++){
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}
console.log();

// Q8. Find the sum of the digits of a number using a loop.
let num7 = parseInt(input.question("Enter a number to find the sum of its digits: "));
let sumOfDigits = 0;
while(num7 !== 0){
    sumOfDigits += num7 % 10;
    num7 = Math.floor(num7 / 10);
}
console.log("Sum of digits is: " + sumOfDigits);
console.log();

// Q9. Print a pyramid pattern of * of height n using nested loops.
let n2 = parseInt(input.question("Enter the height of the pyramid of *: "));
for(let i=1; i<=n2; i++){
    let row = '';
    for(let j=1; j<=i; j++){
        row += '* ';
    }
    console.log(row);
}
console.log();

// Q10. Check if a number is prime or not using a loop.
let num8 = parseInt(input.question("Enter a number to check if it's prime: "));
let isPrime = true;
for(let i=2; i<=Math.sqrt(num8); i++){
    if(num8 % i === 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(num8 + " is a prime number.");
}else{
    console.log(num8 + " is not a prime number.");
}