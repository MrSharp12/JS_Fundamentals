function printInfo(firstName, lastName, title) {
    if(title === undefined) {
        return (`${firstName} ${lastName}`);
    } else {
        return(`${title} ${firstName} ${lastName}`); 
    }
}


console.log((`My name is ${printInfo('Matt', 'Sharp')}.`));
console.log(`My name is ${printInfo('Matt', 'Sharp', 'Mr.')}.`);

function doStuff (firstName, lastName, title) {
 return title ? ` ${title} ${firstName} ${lastName}` : `${firstName} ${lastName}`; //returns in ternary operators go before the TO
}

console.log(doStuff('Ron', 'Thompson'));
console.log(doStuff('Ron', 'Thompson', 'Esq.'));