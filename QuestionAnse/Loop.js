// Print all even numbers between 1 and 50.
for (let i = 1; i <= 50; i += 2) {
    console.log(i);
  }
//   Print the multiplication table of 5.
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }

//   Print the cube of the first 10 natural numbers.
  for (let i = 1; i <= 10; i++) {
    console.log(i ** 3);
  }
  
//   Print all odd numbers between 1 and 50.
  for (let i = 1; i <= 50; i += 2) {
    console.log(i);
  }

  
// print all even numbers between 1 and 100 using a loop?

// for(let num=1; num<=100; num++){
//     if(num % 2 === 0){
//         console.log(num);
//     }   }



//Explain how to calculate the sum of digits of a number using loops.
// sum=0;
// for(let num=0;num<1234;num++){
//     sum=sum+num ;
//     console.log(sum);
// }



//Check if a given number is prime using loops.
// let num = 29;
// for(let i=29;i<=num;i++){
//     let isPrime = true;
//     for(let j=2;j<i;j++){
//         if(i%j===0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(i+" is a prime number");
//     }
//     else{
//         console.log(i+" is not a prime number");
//     }
// }




//Print the Fibonacci sequence up to n terms.
// let n =10;
// let a = 0, b = 1, nextTerm;
// console.log("Fibonacci Series:");
// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
// }



//Count how many digits are in a given number.
let num = 12345;
let count=0;
for(let i=num; i>0; i=Math.floor(i/10)){
    count++;
}
console.log("Number of digits in " + num + " is: " + count);