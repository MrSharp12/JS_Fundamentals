let myCar = {
    make: 'Honda',
    model: 'Accord',
    miles: 300000,
    drive: function (mile) {
        this.miles = mile + this.miles;
        return this.miles;
    },
    showInfo: function () {
        console.log(myCar.make, myCar.model);
    },
}

// make a method that adds a number of miles to the current miles in the object

console.log(myCar.drive(200));
console.log(myCar.miles);
