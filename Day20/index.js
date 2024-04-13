// Q:58
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore(...scores) {
    console.log(scores);
    let average = scores.reduce((total, score) => total + score, 0) / scores.length;
    return average;
}
console.log(averageScore(70, 69, 84, 98));



// Q:59
// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addNumber = makeAdder(5);
console.log(addNumber(10));


// Q:60
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let userProfile = (function () {
    let name = "Ahmed";
    let age = 30;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
export {};
