//write a program that prints numbers from 1 to 100
// multiples of 3 print fizz
// mulitples of 5 print buzz
// 3 and 5 print fizzbuzz

//  for (let x = 1; x <= 100; x++) {
//      if (x % 3 === 0 && x % 5 === 0) {
//         console.log('Fizzbuzz');
//     } else if (x % 3 === 0) {
//          console.log('Fizz');
//      } else if ( x % 5 === 0) {
//          console.log('Buzz');
//      } else {
//          console.log(x);
//      }
// } 

for (let x = 1; x <= 100; x++) {
    x % 3 === 0 && x % 5 === 0 ? console.log('Fizzbuzz'):
    x % 5 === 0 ? console.log('Buzz'):
    x % 3 === 0 ? console.log('Fizz'):
    console.log(x);
}
