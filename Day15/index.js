"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q:43\
// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magiciansNames = ["Doja Cat", "Selena Gomez", "Billie Eilish"];
function showMagicians(magician) {
    magician.forEach(name => {
        console.log(name);
    });
}
function greatMagicians(magician) {
    let great_magician = [];
    magician.forEach(name => {
        great_magician.push(name + " the Great");
    });
    return great_magician;
}
showMagicians(magiciansNames); // show orignal names
let greatMagicianNames = greatMagicians(magiciansNames);
showMagicians(greatMagicianNames); // show modify names
// Q:44
// Sandwiches: Summarize sandwich orders with varying ingredients.
function sandwich(...item) {
    console.log(`Making a sandwich with:${item.join(', ')}`);
}
sandwich("ham", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
// Question 45: Cars: Create detailed car objects with flexible properties.
function createCar(manufacturer, model, optional = {}) {
    const car = {
        manufacturer,
        model,
        ...optional,
    };
    return car;
}
const myCar = createCar("Ford", "Mustang", { color: "blue", year: 2022 });
console.log(myCar);
