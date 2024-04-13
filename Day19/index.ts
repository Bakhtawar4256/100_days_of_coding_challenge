// Q:55
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers: number[] = [5, 15, 40, 50];
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);


// Q:56
// Keep Only Strings: Given a mix of different types of items,make a new list that has only the words.
let mixed_array = [1, "one", 2, "two", 3,"three", 4, "four"];
let stringsArray = mixed_array.filter(item => typeof item === "string");
console.log(stringsArray); 


// Q:57
// Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [88, 94, 72, 99, 53,77];

let averageGrades = grades.reduce((total, grade) => total + grade,0) /grades.length;
console.log(averageGrades);