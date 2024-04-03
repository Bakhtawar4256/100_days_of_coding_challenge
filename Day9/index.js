// Q:25
// Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
let alienColors = "green";
let alienColors2 = "red";
if (alienColors == "green") {
    console.log("You just earned 5 Points!");
}
else {
    //No output because the condition is false.
}
if (alienColors2) {
    //No output because the condition is false.
}


// Q:26
// Alien Colors #2: Choose a color for an alien, then write an if-else chain.
let newAlienColors = "green";
if (newAlienColors == "green") {
    console.log("You just Earned 5 Points for shooting the Aliens!");
}
else {
    console.log("You just Earned 10 Points!");
}
// Version that runs the else Block
let newAlienColors2 = "Yellow";
if (newAlienColors2 == "green") {
    console.log("You just Earned 5 Points for shooting by the Aliens!!");
}
else {
    console.log("You just Earned 10 Points");
}


// Q:27
// Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
let greenAlienVersion = "green";
if (greenAlienVersion == "green") {
    console.log("You Earned 5 Points!!");
}
else if (greenAlienVersion == "Yellow") {
    console.log("You Earned 10 Points!");
}
else if (greenAlienVersion == "red") {
    console.log("You Earned 15 Points!!");
}
let yellowAlienVersion = "yellow";
if (yellowAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if (yellowAlienVersion == "yellow") {
    console.log("You earned 10 points");
}
else if (yellowAlienVersion == "red") {
    console.log("You earned 15 points!");
}
let redAlienVersion = "red";
if (redAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if (redAlienVersion == "yellow") {
    console.log("You earned 10 points!");
}
else if (redAlienVersion == "red") {
    console.log("You earned 15 points!");
}
export {};
