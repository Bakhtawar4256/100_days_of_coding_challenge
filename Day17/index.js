// Q:49
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function hobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    });
}
hobbies("Eating", "Coding", "Sleeping");


// Q: 50
//Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
let myIdealDay = `My ideal day would involve:
1. Walking up early and pray Namaz and recite Holy Quran.
2. Spending a few hours coding.
3. Ending the day by reading a Book.`;
console.log(myIdealDay);


// Q:51 Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
let area_of_rectangle = areaOfRectangle(24, 90);
console.log(area_of_rectangle);
let areaOfRectangleArrowFunc = (length, width) => length * width;
console.log(areaOfRectangleArrowFunc(20, 34));
export {};
