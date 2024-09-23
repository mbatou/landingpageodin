let counter = 1;
let a = counter++;

a = counter++;

console.log(a);

if (counter) {
    counter > 0; 
    console.log('you have made it!')
} else console.log("you're a genius");

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Camel'))

