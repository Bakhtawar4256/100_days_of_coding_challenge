// Q:22
// Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
let studentsData: string[] = ["Maryam", "Zubaida", "Rizwan", "Shoaib"]
console.log(studentsData[4]); //index error here
console.log(studentsData[3]); //correct this Error

//Q:23
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let book: string = "The Secret of Self";

console.log("Is Book == 'The Secret of Self'? I pridict True");
console.log(book == 'The Secret of Self'); //True

console.log("Is book != 'quliatae iqbal'?I pridict True");
console.log(book != 'quliatae iqbal'); //True

console.log("Is book === 'quliatae'? I pridict True");
console.log(book === 'quliatae'); // True

console.log("Is book.toLowerCase() == 'quliatae'? I predict True");
console.log(book.toLowerCase() == 'quliatae');

console.log("Is book.toUpperCase() == 'quliatae'? I predict True");
console.log(book.toUpperCase() == 'quliatae');

console.log("Is book == 'quliatae allama iqbal'? I predict True");
console.log(book == 'quliatae allama iqbal'); //false

console.log("Is book != 'quliatae'? I predict True");
console.log(book !== 'quliatae'); //false

console.log("Is book === quliatae? I  predict True");
console.log(book !== 'quliatae'); //false

console.log("Is book.toLowerCase() == 'quliatae'?I predict True");
console.log(book.toLowerCase() == 'quliatae'); //false

console.log("Is book.toUpperCase() == 'quliatae'? I Predict True");
console.log(book.toUpperCase() == 'quliatae'); // false


// Q:24
// More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// equality and inequality with strings
console.log("Potato" == "Potato"); //true
console.log("potato".toLowerCase() == "potato"); //false

//lower Case
console.log("potato".toLowerCase() == "potato"); //true
console.log("potato".toLowerCase() != "potato"); //true

//Numerical Tests
console.log("potato" == "potato"); //true
console.log("potato" != "potato"); //false
console.log(5 < 10); // true
console.log(20 < 10); // false
console.log(15 > 10); // true
console.log(2 > 10); // false
console.log(10 <= 10); // true
console.log(20 <= 10); // false
console.log(10 >= 10); // true
console.log(2 >= 10); // false

// "and and "or" Operators
console.log("potato" === "potato" && 5 < 10); // true
console.log("potato" === "potato" && 12 < 10); // false
console.log("potato" === "potato" || 15 < 10); // true
console.log("potato" === "potato".toLowerCase() || 12 < 10); // false

//Items in Array
let vegetable: string[] = ["Potato","Onion", "Tomato"];
console.log("Is 'Onion' in vegetable?");
console.log((vegetable as any).includes("Onion"));

//Item is not in a Array
console.log("Is 'Chilli' in Vegetables?");
console.log((vegetable as any).includes("Chilli"));