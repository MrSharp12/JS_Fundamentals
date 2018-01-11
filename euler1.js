
let total = [];
const REDUCE = (arr, value) => arr + value;

for (let x = 1; x < 1000; x++) {
        if (x % 3 === 0 || x % 5 === 0) {
            total.push(x);
    }
}
console.log(total.reduce(REDUCE));




