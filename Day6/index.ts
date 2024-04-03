// Q:16
// More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestFriends: string[] = ["Maryam", "Daniya", "Zubaida", "Mahnoor"];
console.log("Great News! I found a bigger dinner table!!!");

//Adding More Guest
guestFriends.unshift("Sehar");
guestFriends.splice(guestFriends.length / 2, 0, "Urooj");
guestFriends.push("Dua");
guestFriends.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me for dinner?`);
});


// Q:17
//Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfortunately, can only inite two people for dinner.");
while (guestFriends.length > 2) {
    let removedGuest = guestFriends.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to Dinner.`);
}

guestFriends.forEach(guestFriends => {
    console.log(`Dear ${guestFriends}, You'r still invited to Dinner.`);
});

guestFriends.splice(0, guestFriends.length);
console.log(guestFriends);


//Q:18
//Seeing the World: Think of at least five places you’d like to visit.
let places: string[] = ["Malaysia", "Newzeeland", "Turkey", "Paris", "Dubai"]

console.log("originalOrder:", places);

console.log("Alphabatical Order:", [...places].sort());

console.log("originalOrder:", places);

console.log("Reverse Alphabatic order:", [...places].sort().reverse());

console.log("original order:", places);

places.reverse;
console.log("Reverse Order:", places);

places.reverse()
console.log("Original Order:", places);

places.sort()
console.log("Sort in Alphabatic Order:", places);

places.reverse()
console.log("Reverse in Alphabetical Order:", places);
