// Q:61
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["motorcycles"] = 1] = "motorcycles";
    vehicles[vehicles["trucks"] = 2] = "trucks";
})(vehicles || (vehicles = {}));
console.log(vehicles.cars);
console.log(vehicles[vehicles.cars]);


// Q:62
// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
const studentInfo = {
    name: "Bakhtawar",
    age: 18,
    classes: ["Math", "Computer", "Physics"]
};
console.log(studentInfo);


// Q:63
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
let circle = {
    choices: "circle",
    radius: 6
};
let rectangle = {
    choices: "rectangle",
    width: 12,
    height: 20
};
console.log(circle);
console.log(rectangle);
export {};
