// Q:37
//Large Shirts: Default values in make_shirt().
function makeShirts(size = "Large", message = "I like programming") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
makeShirts();
makeShirts("Medium");
makeShirts("Small", "Hello World");



// Q:38
// Cities: Describing cities with a function.
function describeCity(cityName, countryName = "Pakistan") {
    console.log(`${cityName} is in ${countryName}`);
}
describeCity("Karachi");
describeCity("peshawar");
describeCity("Alberta", "Canada");


// Q:39
// City Names: Formatting city-country pairs.
function cityCountry(city, country) {
    let countryData = `${city}, ${country}`;
    return countryData;
}
let countryString = cityCountry("peshawar", "Pakistan");
console.log(countryString); // another way
console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Alberta", "Canada"));
export {};
