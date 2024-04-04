// Q:34
// Pizzas: Share your favorite pizzas and express your love for them.
let pizzaFlavoures: string[] = ["Chicken Tikka", "Chicken Mughlai", "Chicken Fajita"];

pizzaFlavoures.forEach(falvours => {
    console.log(`I like ${falvours} pizza.`);
})
console.log('I really love pizza!');


// Q:35
// Animals: Highlight animals with a common trait.
let animalsList: string[] = ["cat", "peacock", "dog"];
animalsList.forEach (animal =>{
    console.log(`A ${animal} would make a great pet,`)
})
console.log(`Any of theses animals would make a great pet.`);


// Q:36
// T-Shirt: Create a function for customizing t-shirts.
function makeShirt(size:string, message:string){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}
makeShirt("Medium Size", "Typescript");