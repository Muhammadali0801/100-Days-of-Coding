//    DAY 5 CHALLENGE'
/*Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores 
several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

let Upgrade: string[] = ["Emaar tower","Bmw Car","Toyota Landcruiser"];
Upgrade.forEach(Upgrade => {
    console.log(`I Would like to own a ${Upgrade}.`);
});

/*Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

let Person_Name: string[] = ["Muhammad Anas","Abdul Ahad","Muhammad Bilal"]
Person_Name.forEach(Person_Name => {
    console.log(`Dear ${Person_Name}, would you like to join me for dinner?`);
})

/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a
 replacement guest.*/

let unableToAttend = "Muhammad Bilal";
console.log(`${unableToAttend} can't make it to dinner.`);

//Replace the guest
let newguest = "Muhammad Sheryar";
Person_Name[Person_Name.indexOf(unableToAttend)] = newguest;

//new Invitations;
Person_Name.forEach(Person_Name => {
    console.log(`Dear ${Person_Name}, Would You Like To Join Me For Dinner?`);
});