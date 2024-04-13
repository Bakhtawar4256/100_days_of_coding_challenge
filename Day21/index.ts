// Q:61
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
enum vehicles{
    cars,
    motorcycles,
    trucks
}
console.log(vehicles.cars);
console.log(vehicles[vehicles.cars]);


// Q:62
// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
interface Student {
    name: String,
    age: number,
    classes: string[]
}

const studentInfo: Student = {
    name: "Bakhtawar",
    age: 18,
    classes: ["Math", "Computer", "Physics"]
}
console.log(studentInfo);


// Q:63
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
type Shape = {
    choices: "circle" | "rectangle",
    radius?: number,
    width?: number,
    height?: number
}

let circle: Shape = {
    choices: "circle",
    radius: 6
}

let rectangle: Shape ={
    choices: "rectangle",
    width: 12,
    height: 20
}

console.log(circle);
console.log(rectangle);