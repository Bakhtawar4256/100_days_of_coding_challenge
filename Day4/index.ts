// Q:10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
// Bakhtawar 2024-03-24
//This program print a personal message
let myName: string = "Bakhtawar";
console.log(`Hello ${myName} would you like to learn some python Today?`);



// Q:11
// Names: Store the names of a few of your friends in an array called names Print each person’s name by accessing each element in the list, one at a time.
let elements: string[] = ["Mahnoor", "Daniya", "Zubaida"];
for (let i = 0; i< elements.length; i++){
    console.log(elements[i]);
}


// Q:12
// Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
let Names: string[] = ["Mahnoor", "Zubaida", "Dainya"];
for (let name of Names){
    console.log(`Hello ${name}, would you like some Typscript Today?`);
}
