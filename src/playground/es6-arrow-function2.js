// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
// console.log(arguments);
return a + b;
};
console.log(add(1 , 2));

// this keyword - no longer bound with arrow functions


const user = {
    name: 'Bob',
    cities: ['SLC','LA','NYC'],
    printPlacesLived() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city);        
    }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    numbers : [1,2,3,4,5],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((n) => n * this.multiplyBy);
    }
};
console.log(multiplier.multiply());