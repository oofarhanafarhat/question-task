// Getting Started Exercises with TypeScript and Node.js
// Note: Try these short programs to get some firsthand experience with TypeScript and Node.js. You might want to create a new folder for each exercise to keep them organized. Create a single Github repository to commit the code for these exercises and once finished submit the URL of the repo.

// Install Node.js, TypeScript and VS Code on your computer.
// Install Node.js:

// 1. Go to the Node.js download page .
// 2. Select the correct operating system (Windows, macOS, or Linux)
// 3. Click on the "Recommended For Most Users" button to download the LTS (Long Term Support) version
// 4. Run the installer and follow the prompts to install Node.js

// Install TypeScript:

// 1. Open a terminal or command prompt
// 2. Install TypeScript using npm (Node Package Manager) by running the command: npm install -g typescript

// Install VS Code:

// 1. Go to the VS Code download page ((link unavailable))
// 2. Select the correct operating system (Windows, macOS, or Linux)
// 3. Click on the download link to download the VS Code installer
// 4. Run the installer and follow the prompts to install VS Code

// Verify installations:

// 1. Open a terminal or command prompt
// 2. Run node -v to verify Node.js installation
// 3. Run tsc -v to verify TypeScript installation
// 4. Open VS Code and create a new file to verify it's working correctly

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let name1: string = "Eric";
console.log(`Hello ${name1}, would you like to learn some Python today?`);

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let sname: string = "farhana";

console.log(`Lowercase: ${sname.toLowerCase()}`);
console.log(`Uppercase: ${sname.toUpperCase()}`);
console.log(
  `Titlecase: ${sname.charAt(0).toUpperCase() + sname.slice(1).toLowerCase()}`
);

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let quote: string =
  "A person who never made a mistake never tried anything new";
let author: string = "Albert Einstein";
console.log(`${author}once said,${quote}`);

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson: string =
  "A person who never made a mistake never tried anything new";
let author1: string = "Albert Einstein";
let message = `${author} once said ${famousPerson}`;
console.log(message);

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name2: string = "\t\n MAHREEN \n\t";
console.log('Original name: "' + name2 + '"');
console.log('Stripped name: "' + name2.trim() + '"');
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(3 + 5); // Addition: 3 + 5 = 8
console.log(12 - 4); // Subtraction: 12 - 4 = 8
console.log(2 * 4); // Multiplication: 2 * 4 = 8
console.log(16 / 2); // Division: 16 / 2 = 8
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber: number = 27;
let message1: string = `My favorite number is ${favoriteNumber}!`;
console.log(message1);
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// / Author:string[]= ["azlan khan"]
// Date:string|number= "September " 10, 2024
// This program performs arithmetic operations that result in the number 8.
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["nabeel", "abdullah", "azlan", "shujaat", "humza"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let sguests: string[] = [
  "RAHAT ULLAH KHAN",
  "KAMRAN KHAN",
  "S.M KAZIM ALI",
  "S.M BASIT ALI",
  "S.M HUMZA ALI",
];
console.log(
  `Dear ${sguests[0]}, I would be honored if you could join me for dinner. Let's discuss art, science, and the wonders of the universe!`
);
console.log(
  `Dear ${sguests[1]}, I would be honored if you could join me for dinner. Let's discuss art, science, and the wonders of the universe!`
);
console.log(
  `Dear ${sguests[2]}, I would be honored if you could join me for dinner. Let's discuss art, science, and the wonders of the universe!`
);
console.log(
  `Dear ${sguests[3]}, I would be honored if you could join me for dinner. Let's discuss art, science, and the wonders of the universe!`
);
console.log(
  `Dear ${sguests[4]}, I would be honored if you could join me for dinner. Let's discuss art, science, and the wonders of the universe!`
);
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let vehicles: string[] = [
  "Honda motorcycle",
  "Tesla car",
  "Harley-Davidson bike",
  "Toyota truck",
  "Suzuki scooter",
];
console.log(`I would like to own a ${vehicles[0]}.`);
console.log(`I would like to own a ${vehicles[1]}.`);
console.log(`I would like to own a ${vehicles[2]}.`);
console.log(`I would like to own a ${vehicles[3]}.`);
console.log(`I would like to own a ${vehicles[4]}.`);

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests1: string[] = ["S.M TAHA ALI", "WAJAHAT KHAN", "ARYAN ULLAH KHAN"];
console.log(
  `Dear ${guests1[0]}, I would be honored if you could join me for dinner. Let's discuss art, science, and innovation!`
);
console.log(
  `Dear ${guests1[1]}, I would be delighted if you could join me for dinner. Your art and perspective would be fascinating to discuss!`
);
console.log(
  `Dear ${guests1[2]}, I would be thrilled if you could join me for dinner. Let's explore the wonders of the universe together!`
);

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guests2: string[] = ["S.M TAHA ALI", "WAJAHAT KHAN", "ARYAN ULLAH KHAN"];
guests2.pop();
guests2.push("ARBAB KHAN");

console.log(
  `Dear ${guests2[0]}, I would be honored if you could join me for dinner. Let's discuss art, science, and innovation!`
);
console.log(
  `Dear ${guests2[1]}, I would be delighted if you could join me for dinner. Your art and perspective would be fascinating to discuss!`
);
console.log(
  `Dear ${guests2[2]}, I would be thrilled if you could join me for dinner. Let's explore the wonders of the universe together!`
);
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guests3: string[] = ["MS.RABIA", "MS. FARIDA", "MS.SHAHEEN"];

console.log(
  `Dear ${guests3[0]}, I would be honored if you could join me for dinner. Let's discuss art, science, and innovation!`
);
console.log(
  `Dear ${guests3[1]}, I would be delighted if you could join me for dinner. Your art and perspective would be fascinating to discuss!`
);
console.log(
  `Dear ${guests3[2]}, I would be thrilled if you could join me for dinner. Let's explore the wonders of the universe together!`
);

// Guest who can't make it
let cancelledGuest3: string = "MS.SHAEEN";
guests3.pop();

console.log(
  `Unfortunately, ${cancelledGuest3} can't make it to dinner. Let's catch up another time!`
);

// New guest invitation
let newGuest: string = "MS .MARIA";
guests3.push(newGuest);

console.log(
  `Dear ${guests3[2]}, I would be thrilled if you could join me for dinner. Let's talk about groundbreaking discoveries and pioneering women in science!`
);

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let guests: string[] = ["Ms.noreen", "MS.farheen", "MS.ambreen"];

console.log(
  `Dear ${guests[0]}, I would be honored if you could join me for dinner. Let's discuss art, science, and innovation!`
);
console.log(
  `Dear ${guests[1]}, I would be delighted if you could join me for dinner. Your art and perspective would be fascinating to discuss!`
);
console.log(
  `Dear ${guests[2]}, I would be thrilled if you could join me for dinner. Let's explore the wonders of the universe together!`
);

// Guest who can't make it
let cancelledGuest: string = guests[1];

console.log(
  `Unfortunately, ${cancelledGuest} can't make it to dinner. Let's catch up another time!`
);

// Replace with new guest
guests[1] = "Mrs .sadaf";

console.log(
  `Dear ${guests[0]}, I would be honored if you could join me for dinner. Let's discuss art, science, and innovation!`
);
console.log(
  `Dear ${guests[1]}, I would be delighted if you could join me for dinner. Your art and perspective would be fascinating to discuss!`
);
console.log(
  `Dear ${guests[2]}, I would be thrilled if you could join me for dinner. Let's talk about groundbreaking discoveries and pioneering women in science!`
);

// • Print a second set of invitation messages, one for each person who is still in your list.
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guest5: string[] = [
  "rahat ullah khan",
  "kamran khan",
  "mahiba khan",
  "umaima khan",
];
let newguest: string[] = ["ms.rosheana", "MS.shagufta", "MS.nelofer"];
let list = guest5.concat(newGuest);

for (let i = 0; i < list.length; i++) {
  console.log(`Dear ${list[i]}, You are cordially invited to dinner!`);
}

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.
let guest6: string[] = [
  "rahat ullah khan",
  "kamran khan",
  "mahiba khan",
  "umaima khan",
];
let newguest1: string[] = ["ms.rosheana", "MS.shagufta", "MS.nelofer"];
let list2 = guest5.concat(newGuest);
list2.unshift("khadeja khan");

for (let i = 0; i < list.length; i++) {
  console.log(`Dear ${list[i]}, You are cordially invited to dinner!`);
}

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Initial guest list
let guest: string[] = ["zobia", "kulsoom", "naima", "naseem"];

// Print initial invitations
for (const guests of guest) {
  console.log(`Dear ${guests}, you're invited to dinner!`);
}

// Add new guest to the middle of the array
const middleIndex = Math.floor(guest.length / 2);
guest.splice(middleIndex, 0, "roshni");

// Add new guest to the end of the list using push()
guest.push("Falak");

// Print new invitations
for (const guests of guest) {
  console.log(`Dear ${guests}, you're still invited to dinner!`);
}

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Shrinking Guest List
console.log("\nShrinking Guest List:");
const maxGuests = 2;
guests = guests.slice(0, maxGuests);
console.log(guests);

// Print regret messages
console.log("\nRegret Messages:");
for (const guest of ["naiema", "naseem", "roshni", "falak"]) {
  console.log(`Dear ${guest}, sorry, dinner plans have changed.`);
}

// Print final invitations
console.log("\nFinal Invitations:");
for (const guest of guests) {
  console.log(`Dear ${guest}, you're still invited to dinner!`);
}

let guest7: string[] = ["alia", "kazim", "basit", "humza", "bushra", "Falak"];

console.log("Initial Guest List:");
console.log(guest7);

// Remove guests one by one until only two remain
while (guest7.length > 2) {
  const removedGuest: string = guest7.pop() as string;
  console.log(`\nDear ${removedGuest}, sorry, dinner plans have changed.`);
}

console.log("\nRemaining Guests:");
console.log(guest7);

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("\nFinal Invitations:");
for (const guest of guest7) {
  console.log(`Dear ${guest}, you're still invited to dinner!`);
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guests8: string[] = ["Alia", "kazim"];

console.log("Initial Guest List:");
console.log(guests8);

// Remove guests one by one until the list is empty
while (guests8.length > 0) {
  const removedGuest: string = guests8.pop() as string;
  console.log(`\nDear ${removedGuest}, sorry, dinner plans have changed.`);
}

console.log("\nFinal Guest List:");
console.log(guests8);

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// Define an array of places to visit
let placesToVisit: string[] = ["Tokyo", "pakistan", "sawat", "Paris", "Sydney"];

console.log("Places to Visit:");
console.log(placesToVisit);
// Print each place
for (const place of placesToVisit) {
  console.log(`I'd love to visit ${place} one day!`);
}

// • Print your array in alphabetical order without modifying the actual list.
let visit = placesToVisit.sort();
console.log(visit);

// • Show that your array is still in its original order by printing it.
let visited = placesToVisit.slice();
console.log(visited);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse Alphabetical Order:");
console.log(...placesToVisit.reverse());

// • Show that your array is still in its original order by printing it again.
console.log(placesToVisit);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(...placesToVisit.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(placesToVisit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
visit = placesToVisit.sort();
console.log(visited);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log([...placesToVisit].sort().reverse());
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Dinner Guests
let dinnerGuests: string[] = ["saba", "zoia", "mahreen", "shabana"];

console.log(`I'm inviting ${dinnerGuests.length} people to dinner.`);

for (const guest of dinnerGuests) {
  console.log(`Dear ${guest}, you're invited to dinner!`);
}

// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Array of Mountains
let mountains: string[] = [
  "Everest",
  "K2",
  "Kilimanjaro",
  "nangaperbat",
  "humaliya",
];

console.log("List of Mountains:");
console.log(mountains);

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let Country = {
  name: "pakistan",
  capital: "islamabad",
  population: "252 million",
  language: "urdu",
};

console.log("Country Information:");
console.log(Country);

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let colors: string[] = ["Red", "Green", "Blue"];

// This will cause an index error
// console.log(colors[3]);

// Corrected code
console.log("colors:", colors);
console.log("Last color:", colors[colors.length - 1]);

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let language = "JavaScript";

console.log("Is language == 'JavaScript'? I predict True.");
console.log(language == "JavaScript");

console.log("\nIs language == 'Python'? I predict False.");
console.log(language == "Python");

console.log("\nIs language.toLowerCase() == 'javascript'? I predict true.");
console.log(language.toLowerCase() == "javascript");

console.log("\nIs language !== 'urdu'? I predict True.");
console.log(language !== "urdu");

console.log("\nIs language.length === 10? I predict True.");
console.log(language.length === 10);

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// 1. language == "JavaScript": True (exact string match)
// 2. language == "Python": False (different string)
// 3. language.toLowerCase() == "javascript": True (case-insensitive match)
// 4. language !== "urdu": True (not equal to 'urdu')
//  5.language.length === 10: True (length matches)

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// this is true conditional tests
const person = {
  name: "azlan",
  fName: "kamran",
  age: 12,
  isschool: true,
  city: "karachi",
};
console.log(person.name == "azlan"); //true condition
console.log(person.age < 15); //true condition
console.log(person.fName != "noman"); //true condition
console.log(person.city == "karachi"); //true condition
console.log(person.isschool != false); //true condition

// this is  false conditional tests

let a: number = 12;
let b: number = 10;

console.log(a <= b); //this is false condition
console.log(b > a); //this is falase
console.log(a === b); ///this is false
console.log(a != 12); // this is false
console.log(b != 10); // this is false

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let string1 = "azlan";
let string2 = "shujaat";
let string3 = "azlan";

console.log("Test 1: Is string1 === string3? I predict True.");
console.log(string1 === string3); // True

console.log("\nTest 2: Is string1 === string2? I predict False.");
console.log(string1 === string2); // False

console.log("\nTest 3: Is string1 !== string2? I predict True.");
console.log(string1 !== string2); // True

console.log(
  "\nTest 4: Is string1.toLowerCase() === string3.toLowerCase()? I predict True."
);
console.log(string1.toLowerCase() === string3.toLowerCase()); // True

console.log("\nTest 5: Is string1 === 'hello'? I predict False.");
console.log(string1 === "hello"); // False (case-sensitive)

console.log("\nTest 6: Is string2===shujaat? I predict True.");
console.log(string2 === "shujaat"); // True

console.log("\nTest 7: Is string1===(azlan)? I predict True.");
console.log(string1 === "azlan"); // True

console.log("\nTest 8: Is string1!= shujaat? I predict True.");
console.log(string1 != "shujaat"); // True

console.log("\nTest 9: Is string1.length === 5? I predict True.");
console.log(string1.length === 5); // True

console.log("\nTest 10: Is string1 === ''? I predict False.");
console.log(string1 === ""); // False (empty string)

// • Tests using the lower case function
let box = "SMALL";
let box1 = "LARGE";
let box2 = "MEDIUM";
console.log(box.toLocaleLowerCase());
console.log(box1.toLocaleLowerCase());
console.log(box2.toLocaleLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x: number = 5;
let y: number = 5;
console.log(x === y); // true
console.log(x != y); // false not equal

let g: number = 10;
let h: number = 5;
console.log(g > h); // true
console.log(h < g); //true
console.log(g >= h); // true
console.log(g <= h); // false

// • Tests using "and" and "or" operators
let e: number = 20;
let f: number = 10;
let d: number = 20;

console.log(e > f && e === d); //true
console.log(f < e || e === f); //true

// • Test whether an item is in a array
const arr: number[] = [1, 2, 3, 4, 5];
arr.pop();

console.log(arr); // true

// • Test whether an item is not in a array

const xx: number[] = [1, 2, 3, 4, 5];
xx.push(6);

console.log(xx); // true

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alienColor: string = "green";

// If statement to test alien color
if (alienColor === "green") {
  console.log("players just earned 5 points");
} else {
  console.log(`Alien color is ${!alienColor}. No points earned.`);
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alienColor1: string = "green";

if (alienColor1 === "green") {
  console.log("Player earned 5 points!");
}

let alienColor2: string = "yellow";

if (alienColor2 === "green") {
  console.log("Player earned 5 points!");
}

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

let alien_color: string = "green";
if (alien_color === "green") {
  console.log("players just earned 5 points for shooting alien");
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {
  console.log("players just earned 10 points");
}

// • Write one version of this program that runs the if block and another that runs the else block.
let block: string = "green";
if (block === "green") {
  console.log("players just eraned 5 points");
} else {
  console.log("palyers are loss the point");
}

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
let alien: string = "green";
if (alien === "green") {
  console.log("players eraned 5 points");
}

// • If the alien is yellow, print a message that the player earned 10 points.
let alien1: string = "yallow";
if (alien1 === "yallow") {
  console.log("player earned 10 points");
}

// • If the alien is red, print a message that the player earned 15 points.
let alien3: string = "red";
if (alien3 === "red") {
  console.log("player earned 15 points");
}

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Version 1: Green Alien

let alienColor4: string = "green";

if (alienColor4 === "green") {
  console.log("Player earned 5 points!");
} else if (alienColor4 === "yellow") {
  console.log("Player earned 10 points!");
} else {
  console.log("Player earned 15 points!");
}

// Version 2: Yellow Alien

let alienColor5: string = "yellow";

if (alienColor5 === "green") {
  console.log("Player earned 5 points!");
} else if (alienColor5 === "yellow") {
  console.log("Player earned 10 points!");
} else {
  console.log("Player earned 15 points!");
}

// Version 3: Red Alien

let alienColor6: string = "red";

if (alienColor6 === "green") {
  console.log("Player earned 5 points!");
} else if (alienColor6 === "yellow") {
  console.log("Player earned 10 points!");
} else {
  console.log("Player earned 15 points!");
}

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.c
let age: number = 1;
if (age < 2) {
  console.log(" the person is a baby");
}

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
let age1: number = 2;
if (age1 <= 2 && age1 < 4) {
  console.log(" the person is toddler");
}

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
let age2: number = 4;
if (age2 >= 4 && age2 < 13) {
  console.log(" the person is a kid.");
}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
let age3: number = 13;
if (age3 >= 13 && age3 < 20) {
  console.log("the person is a teenager.");
}

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
let age4: number = 20;
if (age4 >= 20 && age4 <= 65) {
  console.log("the the person is an adult.");
}

// • If the person is age 65 or older, print a message that the person is an elder.
let age5: number = 65;
if (age5 >= 65) {
  console.log("the person is an elder");
}

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string[] = [
  "mango",
  "banana",
  "apple",
  "Gava",
  "lechi",
  "water melon",
];

for (const fruit of favorite_fruits) {
  console.log(`i love ${fruit}!`);
}

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favoriteFruits = ["mango", "strawberry", "pineapple", "banana", "orange"];

if (favoriteFruits.indexOf("mango") !== -1) {
  console.log("You really like mangoes!");
}

if (favoriteFruits.indexOf("banana") !== -1) {
  console.log("You really like bananas!");
}

if (favoriteFruits.indexOf("strawberry") !== -1) {
  console.log("You really like strawberries!");
}

if (favoriteFruits.indexOf("pineapple") !== -1) {
  console.log("You really like pineapples!");
}

if (favoriteFruits.indexOf("apple") !== -1) {
  console.log("You really like apples!");
}

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

let usernames = ["ahmed", "admin", "humza", "kazim", "Taha ali"];

for (let username of usernames) {
  if (username === "admin") {
    console.log(`Hello admin, would you like to see a status report?`);
  }

  // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
  else {
    console.log(`HELLO ${username} thankyou for logging again`);
  }
}
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let usernames1 = ["ahmed", "admin", "humza", "kazim", "Taha ali"];
for (let username1 of usernames1) {
  if (username1.length === 0) {
    console.log("We need to find some users!");
  } else {
    console.log(`HELLO ${username1} thankyou for logging again`);
  }
}

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames2 = [];
if (usernames2.length === 0) {
  console.log("we need to find some users !");
}

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let usernames3 = ["ahmed", "admin", "humza", "kazim", "Taha ali"];
let current_users = [
  "kashan11",
  "nabeel22",
  "abdullah33",
  "saba12",
  "umaima13",
];
// check user avaibility
// Function to check username availability
function checkUser(usernames3:any) {
  return !current_users.indexOf(usernames3);
}

// Check availability for each new username
for (let username of usernames3) {
  if (!checkUser(username)) {
    console.log(`Username ${username} is available.`);
  } else {
    console.log(`Username ${username} is already taken.`);
  }
}

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let current_users1 = [
  "kashan11",
  "nabeel22",
  "abdullah33",
  "saba12",
  "umaima13",
];
let new_users = ["ahmed", "nabeel22", "humza", "saba12", "tahaali"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Function to check username availability
function checkUser1(usernames3:any) {
  return current_users.indexOf(usernames3) === -1;
}

// Loop through new_users and check availability
for (let username of new_users) {
  if (checkUser1(username)) {
    console.log(`Username ${username} is available.`);
  } else {
    console.log(
      `Username ${username} is already taken. Please enter a new username.`
    );
  }
}

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let new_users1 = ["ahmed", "Nabeel22", "humza", "saba12", "tahaali"];
let user1 = "NABELL22";
const taken = new_users1.indexOf(user1.toLowerCase());

// Loop through new_users and check availability
for (let username of new_users1) {
  const is_taken = new_users1.indexOf(username.toLowerCase());

  if (is_taken) {
    console.log(`Username ${username} is already taken.`);
  } else {
    console.log(`Username ${username} is available.`);
  }
}

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (const num of numbers) {
  console.log(num);
}

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num1 of numbers1) {
  let suffix;
  if (num1 === 1) {
    suffix = "st";
  } else if (num1 === 2) {
    suffix = "nd";
  } else if (num1 === 3) {
    suffix = "rd";
  } else if (num1 === 4) {
    suffix = "th";
  } else if (num1 === 5) {
    suffix = "th";
  } else if (num1 === 6) {
    suffix = "th";
  } else if (num1 === 7) {
    suffix = "th";
  } else if (num1 === 8) {
    suffix = "th";
  } else if (num1 === 9) {
    suffix = "th";
  }

  console.log(`${num1}${suffix}`);
}

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
let pizza = [
  "chikan tikka pizza",
  "lavapizza",
  "mayogarlic pizza",
  "malaiboti pizza",
];
for (const pizzas of pizza) {
  console.log(pizzas);
}

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza1 = [
  "chikan tikka pizza",
  "lavapizza",
  "mayogarlic pizza",
  "malaiboti pizza",
];
for (const pizzas1 of pizza1) {
  console.log(` i like ${pizzas1}`);
}
console.log("i really love pizza!");

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["dog", "cat", "rabbit"];

for (const animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size:string, message:string) {
  console.log(
    `The shirt size is ${size} and the message printed on it is "${message}".`
  );
}

make_shirt("Large", "I Love Programming");

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt1(size = "Large", message = "I love TypeScript") {
  console.log(
    `The shirt size is ${size} and the message printed on it is "${message}".`
  );
}

// Large shirt with default message
make_shirt1();

// Medium shirt with default message
make_shirt1("Medium");

// Small shirt with custom message
make_shirt1("Small", "I love JavaScript");

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string, country = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this

// "Lahore, Pakistan"
function city_country(city:string, country:string) {
  return `${city} ${country}`;
}
let pk = city_country("karachi", "pakistan");
console.log(pk);

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country1(city:string, country:string) {
  return `${city}, ${country}`;
}

// Call the function with three city-country pairs
let pak = city_country1("Karachi", "Pakistan");
let us = city_country1("New York", "USA");
let uk = city_country1("London", "United Kingdom");
console.log(pak);
console.log(us);
console.log(uk);

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist:string, title:string, tracks:string) {
  const album = {
    artist: artist,
    title: title,
    tracks: tracks,
  };
  return album;
}

// Make three albums
const album1 = make_album("waheedzaferqasmi", "zahe muqadder", "10");
const album2 = make_album("humza qadri", "rooty rooty soye teba chaly", "10");
const album3 = make_album("Pink Floyd", "The Dark Side of the Moon", "10");

// Print each album
console.log(album1);
console.log(album2);
console.log(album3);

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magicians = ["kabeer", "haddi", "mongi", "faisal", "domdom"];
function show_magicians(magicians:string) {
  for (const magician of magicians) {
    console.log(magician);
  }
}
show_magicians("kabeer");

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magicians1 = ["kabeer", "haddi", "mongi", "faisal", "domdom"];

function show_magicians1(magicians1:string[]) {
  magicians.forEach((magician) => console.log(magician));
}

function make_great(magicians1:string[]) {
  return magicians.map((magician) => `The Great ${magician}`);
}
console.log(make_great(magicians1));

console.log("Original List:");
show_magicians1(magicians);

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians2 = ["kabeer", "haddi", "mongi", "faisal", "domdom"];

function show_magicians2(magicians2:string[]) {
  magicians2.forEach((magician2) => console.log(magician2));
}

// Function to modify magicians names
function make_great2(magicians2:any) {
  return magicians2.map((magicians:any) => `The Great ${magicians2}`);
}

console.log("Original List:");
show_magicians2(magicians2);

// Modified list
const greatMagicians = make_great(magicians);

console.log("\nModified List:");
show_magicians2(greatMagicians);

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to order sandwich
function orderSandwich(...items:string[]) {
  console.log("Sandwich Order:");
  console.log("-----------------");
  console.log(`Items: ${items.join(", ")}`);
  console.log(`Total Items: ${items.length}`);
  console.log(`Price: $${items.length * 1.5}`);
  console.log("-----------------");
}

// Call function three times
orderSandwich("Turkey", "Avocado", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese", "Cucumber");
orderSandwich("Veggie", "Hummus", "Cucumber", "Sprouts", "Avocado", "Tomato");

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Function to store car information
function createCar1(manufacturer: string, model: string, ...options: {[key: string]: string}[]) {
  const car: {
    manufacturer: string;
    model: string;
    [key: string]: string; 
  } = {
    manufacturer,
    model,
  };
  options.forEach((option) => {
    const [key, value] = Object.entries(option)[0];
    car[key] = value;
  });

  return car;
}

// Call function with required information and two other name-value pairs
const car1 = createCar1(
  "Toyota",
  "Camry",
  { color: "blue" },
  { feature: "Sunroof" }
);
const car2 = createCar1(
  "Honda",
  "Civic",
  { color: "Red" },
  { feature: "GPS" }
);

console.log(car1);
console.log(car2);
