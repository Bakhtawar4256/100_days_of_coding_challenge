// Q:13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transport: string[] = ["Honda Bike", "Tesla car", "Bianchi Bicycle"];
transport.forEach(element => {
    console.log(`I Would like to own a ${element}`);
});


// Q:14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest_friend: string[] = ["Maryam", "Mahnoor", "Daniya"]
guest_friend.forEach(friends => {
    console.log(`Dear ${friends} would you like to join me for Dinner?`);
});


// Q:15
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let unableToAttend = "Maryam";
console.log(`${"unableToAttend"} can't make it to dinner`);

//Replace The Guest
let newGuest = "Zubaida";
guest_friend[guest_friend.indexOf(unableToAttend)] = newGuest;

//New Invitation
guest_friend.forEach(guest_friend =>{
    console.log(`Dear ${guest_friend}, Would you like to join me for Dinner?`)
});