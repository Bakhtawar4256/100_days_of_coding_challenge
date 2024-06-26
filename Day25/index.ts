// Q:73
// Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function updateLetValue() {
    let myName = "Bakhtawar";
    console.log("Let Initial Value", myName);

    myName = "Bakhtawar Abbasi";
    console.log("Let Updated Value:", myName);
}
updateLetValue();


// Q:74
// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapValues(){
    let a = 12;
    let b= 8;
    console.log("Before Swap: a", a, "b", b);
    const temp = a;
    a = b;
    b = temp;
    console.log("After Swap: a", a, "b", b);
}
swapValues();


// Q:75
// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction,multiplication, division) on x using compound operators.
function useCompoudOperators(){
    let x = 10;
    console.log("Initial value of x: ", x);

    x+= 2;
    console.log("After Addition: ", x);

    x -= 2
    console.log("After Subtraction: ", x);

    x *= 2
    console.log("After Mutiplication: ", x);

    x /= 2
    console.log("After Division: ", x);
}

useCompoudOperators();