// Q:19
//Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
let guests: string[] = ["Urooj", "Maryam", "Zubaida", "Mahnoor", "Dua", "Sara"];
console.log(`I am inviting ${guests.length} people to dinner.`)


// Q:20
//Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages: string[] = ["English", "Arabi", "Japnies", "Sindhi", "Korean"];
console.log("Languages I'd like to learn:", languages);


//Q:21
//Think of something you could store in a TypeScript Object. Write a program that creates Object containing these items.
let poetryBook:{
    title: string;
    author: string;
    yearPublished: number;
} = {
    title: "The Secret of The Self",
    author: "Allama Iqbal",
    yearPublished: 1995,
};

console.log(`Book Info: ${poetryBook.title} by ${poetryBook.author}, Published in ${poetryBook.yearPublished}.`);