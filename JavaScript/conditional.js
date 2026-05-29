const input = require("readline-sync"); // Importing the readline-sync module to take user input

// Q1. Write a program to check whether a given number is odd or even using if-else.
let n = parseInt(input.question("Enter a number to check if it's even or odd: "));
if(n%2==0){
    console.log("Even no");
}
else{
    console.log("Odd no");
}
console.log();

// Q2. Take a student's marks as input and print their grade using conditions
let marks = parseInt(input.question("Enter your marks to get the grade: "));
if(marks>=90 && marks<=100){
    console.log("A");
}
else if(marks>=80 && marks<90){
    console.log("B");
}
else if(marks>=70 && marks<80){
    console.log("C");
}
else if(marks>=60 && marks<70){
    console.log("D");
}
else if(marks>=0 && marks<60){
    console.log("F");
}
console.log();

// Q3. Determine whether a given year is a leap year.
let year = parseInt(input.question("Enter a year to check if it's a leap year or not: "));
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
console.log();

// Q4. Find the largest of three numbers using nested if statements.
console.log("Enter three numbers to check which is largest no.");
let a = parseInt(input.question("Enter first number: "));
let b = parseInt(input.question("Enter second number: "));
let c = parseInt(input.question("Enter third number: "));
if(a > b && a > c){
    console.log(a);
}
if(b>a && b>c){
    console.log(b);
}
if(c>a && c>b){
    console.log(c);
}
console.log();

// Q5. Check if a given character is a vowel or a consonant.
let char = input.question("Enter a character to check if it's a vowel or a consonant: ").toLowerCase();
if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    console.log("'" + char + "' is a vowel");
} else {
    console.log("'" + char + "' is a consonant");
}
console.log();

// Q6. Check if a given number is positive, negative, or zero.
let num = parseInt(input.question("Enter a number to check if it's positive, negative, or zero: "));
if(num > 0){
    console.log("Positive");
} else if(num < 0){
    console.log("Negative");
} else {
    console.log("Zero");
}
console.log();

// Q7. Calculator Program : Perform addition, subtraction, multiplication, or division based on user input
let operator = input.question("Enter an operator(+, -, *, /) to perform the arithmetic operation: ");
let x = parseInt(input.question("Enter first number: "));
let y = parseInt(input.question("Enter second number: "));
switch(operator){
    case '+':
        console.log(x + y);
        break;
    case '-':
        console.log(x - y);
        break;
    case '*':
        console.log(x * y);
        break;
    case '/':
        console.log(x / y);
        break;
    default:
        console.log("Invalid operator");
}
console.log();

// Q8. Take a number (1–7) as input and print the corresponding day of the week.
let dayNumber = parseInt(input.question("Enter a number(1-7) to get the corresponding day of the week: "));
if(dayNumber === 1){
    console.log("Monday");
} else if(dayNumber === 2){
    console.log("Tuesday");
} else if(dayNumber === 3){
    console.log("Wednesday");
} else if(dayNumber === 4){
    console.log("Thursday");
} else if(dayNumber === 5){
    console.log("Friday");
} else if(dayNumber === 6){
    console.log("Saturday");
} else if(dayNumber === 7){
    console.log("Sunday");
} else {
    console.log("Invalid input. Please enter a number between 1 and 7.");
}
console.log();

// Q9. Check if a person is eligible to vote based on their age (age ≥ 18).
let age = parseInt(input.question("Enter your age to check eligibility to vote: "));
if(age >= 18){
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
console.log();

// Q10. Determine the type of triangle (Equilateral, Isosceles, or Scalene) based on the lengths of its sides.
console.log("Enter sides of triangle to check if it's Equilateral, Isosceles, or Scalene triangle.");
let side1 = parseInt(input.question("Enter the length of the first side: "));
let side2 = parseInt(input.question("Enter the length of the second side: "));
let side3 = parseInt(input.question("Enter the length of the third side: "));
if(side1 === side2 && side2 === side3){
    console.log("Equilateral triangle");
} else if(side1 === side2 || side2 === side3 || side1 === side3){
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}
