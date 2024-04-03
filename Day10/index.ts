//Q:28
// Stages of Life: Determine a person’s life stage with an if-else chain.
let personAge: number = 18;
if (personAge < 2){
    console.log("The person is a baby.");
}

else if(personAge >=2 && personAge < 4){
    console.log("The person is a toddler.")
}

else if(personAge >= 4 && personAge < 13){
    console.log("The person is a Kid.")
}

else if(personAge >= 13 && personAge < 20){
    console.log("The person is a teenager.");
}

else if(personAge >= 20 && personAge < 65){
    console.log("The person is an adult.");
}

else if (personAge >= 65){
    console.log("The person is an elder.");
}

else{
    console.log("The person is an elder.");
}

//Q:29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favouriteFruits: string [] = ["Mango", "Banana", "Grapes", "Pineapple", "Strawberry"];
if((favouriteFruits as any).includes("Mango")){
    console.log(`You really like ${favouriteFruits[0]}!`)
}

if((favouriteFruits as any).includes("Banana")){
    console.log(`You really like ${favouriteFruits[1]}!`)
}

if((favouriteFruits as any).includes("Grapes")){
    console.log(`You really like ${favouriteFruits[2]}!`)
}

if((favouriteFruits as any).includes("Pineapple")){
    console.log(`You realyy like ${favouriteFruits[2]}!`)
}

if((favouriteFruits as any).includes("Strawberry")){
    console.log(`You realyy like ${favouriteFruits[2]}!`)
}


// Q: 30
// Hello Admin: Greet users differently, especially 'admin'.
let usernames: string [] = ['Admin', 'maryam345', 'zubaida895', 'ali234', 'sara248']
usernames.forEach(users => {
if (users == 'Admin'){
    console.log(`Hello ${users}, would you like to see a status report?`);
}

else if(users == 'maryam345'){
    console.log(`Hello ${users}, would you like to perform a some Task?`);
}

else if(users == 'zubaida895') {
    console.log(`Hello ${users}, would you like to perform a some task?`);
}

else if(users == 'ali234') {
    console.log(`Hello ${users}, would you like to perform a some task?`);
}

else if(users == 'sara248') {
    console.log(`Hello ${users}, would you like to perform a some task?`);
}

else{
    console.log(`Hello ${users}, thank you for Logging in again.`);
}

});