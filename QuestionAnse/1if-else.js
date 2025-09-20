//Check if a number is positive, negative, or zero.
let num = 5;
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}


//Find the greater between two numbers.

let num1 =10;
let num2 = 20;
if (num1 > num2) {
  console.log("num1 is greater than num2");
} else if (num1 < num2) {
  console.log("num1 is less than num2");
} else {
  console.log("num1 is equal to num2");
}


//Find the largest among three numbers.

let num3 =12;
let num4 =24;
let num5 =18;
if (num3 > num4 && num3 > num5) {
  console.log("num1 is the greatest");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is the greatest");
} else {
  console.log("num3 is the greatest");
}



//Check if a given year is a leap year or not. 
 
 let year =2025;
if (year % 4 === 0 && year % 100 !== 0) {
  console.log(year + " is a leap year.");
} else if (year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// A student’s score is given. Print the **grade** based on:
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}




//Categorize a person by age

let age = 20;

  if (age < 13) {
    console.log("Child");
  } else if (age < 18) {
    console.log("Teenager");
  } else if (age < 60) {
    console.log("Adult");
  } else {
    console.log("Senior");
  } 



  
// Check if a given character is a vowel or consonant.

let char = 'a';

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}



//Check if a number is divisible by both 3 and 5.

let numb = 15;

if (numb % 3 === 0 && numb % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible by both 3 and 5");
}



//A temperature is given. Print:
let temperature = 30;

if (temperature > 25) {
  console.log("Hot");
} else if (temperature < 15) {
  console.log("Cold");
} else {
  console.log("Warm");
}




