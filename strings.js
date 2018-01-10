// Use of double quotes
// "I was born in Downer's Groove."
// "I've lived in four states."
// "Indiana rules!"

// Use of single quotes
// 'Singe quotes are the way to go.'
// 'Less keystrokes'
// 'Wow Queen.  You\'re beautiful.'

// Nesting single inside of double quotes
// "This is 'super' duper."

// Nesting double inside of single
// 'No you didn\'t "Make it."'

// let tweet = 'Death Grips.  I stay noided.';

// let upperTweet = tweet.toUpperCase();
// console.log(upperTweet);

// let lowerTweet = tweet.toLowerCase();
// console.log(lowerTweet);


// Targeting specific characters in a string

let first = 'matt';
let last = 'sharp';



let newFirst = first[0].toUpperCase();
let newFull = first.slice(1, 4);
console.log(newFirst + newFull);

let upper = first[0].toUpperCase().concat(first.slice(1)); //chaining methods
console.log(upper);



