"use strict";
//Q.1
var message = "Hello Zubair Would you like to learn Typescript Program";
console.log(message);
//Q.2
var personName = "Zubair Arshad";
console.log(personName);
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
//Q.3
var auther_Name = "Muhammad Ali Jinnah";
var quotes = "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.";
console.log(`${auther_Name}, Once Said: ${quotes} `);
//Q.4
var famous_person = "Allama Mohammad Iqbal";
var massage = "A man without a vision is a man without a future. A man without a future will always return to his past.";
console.log(`${massage} By Allama Mohammad Iqbal`);
//Q.5
let stripeName = "\t\n   Zubair Arshad   \n\t";
console.log(`stripeName is =>, ${stripeName}`);
let strippedName = stripeName.trim();
console.log(strippedName);
//Q.6 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(`The addition of two numbers that makes 8 is 6 + 2 =`, 6 + 2);
console.log(`The subtraction of two numbers that makes 8 is 10-2 =`, 10 - 2);
console.log(`The multiplication of two numbers that makes 8 is 4*2 =`, 4 * 2);
console.log(`The division of two numbers that makes 8 is 64/4 =`, 64 / 8);
//Q.7 You should create four lines that look like this:
//console.log(5+3);
console.log(5 + 3);
console.log(6 + 2);
console.log(7 + 1);
console.log(10 - 2);
//Q.8 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 7;
console.log(`how many door of jaanh is = ${favoriteNumber}`);
//Q.9 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program by [Zubair Arshad]
// Date: 2023-09-11
// This program calculates the sum of 5 and 3 and prints the result.
console.log(5 + 3);
//Q.10 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendNames = ["Arslan", "Shahbaz", "Umair", "Naveed"];
for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
//Q.11 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let i = 0; i < friendNames.length; i++) {
    console.log(`Hello, ${friendNames[i]}, Have a nice gathering with you.`);
}
//Q.12 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoriteCars = ["Toyta 1996 Model", "Honda 2006 Model", "Toyta Prius"];
console.log(`At the age of 10, i want to buy > ${favoriteCars[0]} `);
console.log(`At the age of 20, i want to buy ${favoriteCars[1]} because of its Power `);
console.log(`Now Love to Buy ${favoriteCars[2]} because of fuel average `);
//Q.13 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let daughterName = "Ayesha Noor";
let guestName = ["Umair", "Naveed", "Talha", "Abdullah"];
for (let i = 0; i < guestName.length; i++) {
    console.log(`Dear ${guestName[i]},You are cordially invited to join us at my doughter ${daughterName} Birthday`);
}
//Q.14 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["Umair", "Talha", "Naveed", "Abdullah"];
let personNotCome = "Naveed";
console.log(`Mr. ${personNotCome}, cann't make it.`);
guestList.splice(2, 1, "Rafiq");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You are cordially invited to join us my doughter birthday, tonight.`);
}
//Q.15 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// console.log("I need bigger tabel 3 more friends will join us tonight")
let newGuest = ["Arshad", "Anwar", "Zubair"];
guestList.unshift(newGuest[0]);
console.log(guestList);
let insertIndex = Math.floor(guestList.length / 2);
guestList.splice(insertIndex, 0, newGuest[1]);
console.log(guestList);
guestList.push(newGuest[2]);
console.log(guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear, ${guestList[i]} You Are Welcom to join us tonight`);
}
//Q;16. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("1 can invite only two people for dinner.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
console.log(guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log(`you are still ${guestList[i]} invited`);
}
guestList.pop();
guestList.pop();
console.log(`Guest list is empty now>, ${guestList}[]`);
//Q.17 Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let worldPlaces = ["KSA", "Dubai", "Turky", "USA", "Japan"];
console.log(worldPlaces);
worldPlaces.sort();
console.log(worldPlaces);
worldPlaces.reverse();
console.log(worldPlaces);
worldPlaces.reverse();
console.log(worldPlaces);
//Q.18 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`Hello Everyone! This is to inform you that we are inviting ${guestList.length} number of guests to dinner `);
//Q.19 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let pakPlaces = ["Pakistan", "Gilgit Baltistan", "Naga Parbat", "Indus River", "Balti"];
for (let i = 0; i < pakPlaces.length; i++) {
    console.log(pakPlaces[i]);
}
//Q.20 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var car = {
    company: "Honda",
    color: "Black",
    year: 2023,
};
console.log("car", car);
console.log("car", car.company);
console.log("car", car.color);
console.log("car", car.year);
//Q.21 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let number = [15, 17, 12, 14, 19];
console.log(number[7]);
//Q.22 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let cars = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test 1: Check if a number is greater than 10
let number1 = 15;
console.log("Is number > 10? I predict True.");
console.log(number1 > 10);
// Test 2: Check if a string is equal to 'apple'
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
// Test 3: Check if a boolean variable is true
let isRaining = true;
console.log("Is it raining? I predict True.");
console.log(isRaining);
// Test 4: Check if a string is not equal to 'banana'
let anotherFruit = 'banana';
console.log("Is anotherFruit != 'banana'? I predict True.");
console.log(anotherFruit != 'banana');
// Test 5: Check if a number is less than or equal to 5
let someNumber = 3;
console.log("Is someNumber <= 5? I predict True.");
console.log(someNumber <= 5);
// Test 6: Check if two strings are equal
let word1 = 'hello';
let word2 = 'hi';
console.log("Are word1 and word2 equal? I predict False.");
console.log(word1 == word2);
// Test 7: Check if a boolean variable is false
let isSunny = false;
console.log("Is it sunny? I predict False.");
console.log(isSunny);
// Test 8: Check if a zubairAge is less than or equal to umairAge
let zubairAge = 32;
let umairAge = 23;
console.log("Is myAge less than or equal to yourAge? I predict False.");
console.log(zubairAge <= umairAge);
// Test 9: check its a sunny day and a weekend 
let Sunny = true;
let Weekend = false;
console.log("Is it sunny and a weekend? I predict False.");
console.log(Sunny && Weekend);
// Test 10: Check if a number is greater than 100
let bigNumber = 120;
console.log("Is bigNumber > 100? I predict False.");
console.log(bigNumber > 100);
//Q.23 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
// Test whether an item is in a array
//Test whether an item is not in a array
let country1 = "pakistan";
let country2 = "India";
console.log("is Pakistan and India are equal,I predict false");
console.log(country1 == country2);
console.log("is Pakistan and India are not equal,I predict true");
console.log(country1 != country2);
let name1 = "Muhammad Arshad";
let name2 = "Zubair Arshad";
console.log(name1.toLocaleLowerCase() == name2.toLocaleUpperCase());
let num1 = 20;
let num2 = 30;
console.log("this number equal to each other", num1 == num2);
console.log("this number  not equal to each other", num1 == num2);
console.log("is num1 grater than num2>", num1 > num2);
console.log("is num1 less than num2>", num1 < num2);
console.log("is num1 greater than or equal to num2>", num1 >= num2);
console.log("is num1 less than or equal to num2>", num1 <= num2);
//Tests using "and" and "or" operators
let age1 = 23;
if (age1 > 18 && age1 <= 25) {
    console.log("He is eligible for Apply In LLB");
}
else {
    console.log("He is not eligible for Apply In LLB");
}
let temp = 25;
if (temp > 4 || temp <= 30) {
    console.log("This is good time to visit ");
}
else {
    console.log("otherwise its very cool or hot");
}
let fruits = ["apple", "banana", "cherry", "date", "fig"];
let itemToFind = "fig";
// Use includes() to check if the item is in the array
if (fruits.includes(itemToFind)) {
    console.log(`${itemToFind} is in the array.`);
}
else {
    console.log(`${itemToFind} is not in the array.`);
}
let asianCountry = ["Pakistan", "India", "Bangladesh", "China", "Afghanistan"];
let findCountry = "USA";
if (fruits.includes("findCountry")) {
    console.log(`${findCountry} is in the Asia .`);
}
else {
    console.log(`${findCountry}  not in the Asia.`);
}
//Q.24 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.  
//  Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) 
let Player1 = "Zubair Arshad";
let alienColor1 = "Green";
if (alienColor1 === "Green") {
    console.log(`${Player1} just earned 5 points.`);
}
let alienColor2 = "Yellow";
if (alienColor2 === "Green") {
    console.log(`${Player1} just earned 5 points.`);
}
//Q.25
if (alienColor1 === "Green") {
    console.log(`${Player1} just earned 5 pointsor shooting the alien.`);
}
else if (alienColor2 === "red") {
    console.log(`${Player1} just earned 10 points.`);
}
else {
    console.log(`${Player1}not earned a single point`);
}
//Q> 26
let alienColor0 = "green";
if (alienColor0 === "green") {
    console.log("You earned 5 points.");
}
else if (alienColor0 === "yellow") {
    console.log("You earned 10 points.");
}
else if (alienColor0 === "red") {
    console.log("You earned 15 points.");
}
//Q.27
let age2 = 32;
if (age2 < 2) {
    console.log("The person is a baby.");
}
else if (age2 >= 2 && age2 < 4) {
    console.log("The person is a toddler.");
}
else if (age2 >= 4 && age2 < 13) {
    console.log("The person is a kid.");
}
else if (age2 >= 13 && age2 < 20) {
    console.log("The person is a teenager.");
}
else if (age2 >= 20 && age2 < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q.28
let favorite_fruits1 = ["Mango", "Banana", "Orange"];
if (favorite_fruits1.includes("Mango")) {
    console.log("Dear you look like a mango");
}
if (favorite_fruits1.includes("Banana")) {
    console.log("Dear you Look like a Banana");
}
if (favorite_fruits1.includes("Orange")) {
    console.log("Dear you Look like a Orange");
}
//Q.29
let userName1 = ["Admin", "Naveed", "Arslan"];
for (let i = 0; i < userName1.length; i++) {
    if (userName1[i] === "Admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userName1[i]} thank you for logging in again`);
    }
}
//Q.30
userName1.pop();
userName1.pop();
userName1.pop();
console.log(userName1);
if (userName1 = []) {
    console.log(`We need to find some users`);
}
//Q.31
let current_users2 = ["Arshad", "Arslan", "RIZWAN", "iMRAN", "Kamran"];
let new_users2 = ["Arslan", "Haris", "Babar", "Ali", "Arshad"];
// Convert all usernames to lowercase for case-insensitive comparison
current_users2 = current_users2.map(username => username.toLowerCase());
new_users2 = new_users2.map(username => username.toLowerCase());
// Loop through new users and check for uniqueness
for (let new_user of new_users2) {
    if (current_users2.includes(new_user)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different one.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
//Q> 26
let alienColor = "green";
if (alienColor === "green") {
    console.log("You earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("You earned 10 points.");
}
else if (alienColor === "red") {
    console.log("You earned 15 points.");
}
//Q.27
let age = 32;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q.28
let favorite_fruits = ["Mango", "Banana", "Orange"];
if (favorite_fruits.includes("Mango")) {
    console.log("Dear you look like a mango");
}
if (favorite_fruits.includes("Banana")) {
    console.log("Dear you Look like a Banana");
}
if (favorite_fruits.includes("Orange")) {
    console.log("Dear you Look like a Orange");
}
//Q.29
let userName = ["Admin", "Naveed", "Arslan"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === "Admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userName[i]} thank you for logging in again`);
    }
}
//Q.30
userName.pop();
userName.pop();
userName.pop();
console.log(userName);
if (userName = []) {
    console.log(`We need to find some users`);
}
//Q.31
let current_users = ["Arshad", "Arslan", "RIZWAN", "iMRAN", "Kamran"];
let new_users = ["Arslan", "Haris", "Babar", "Ali", "Arshad"];
// Convert all usernames to lowercase for case-insensitive comparison
current_users = current_users.map(username => username.toLowerCase());
new_users = new_users.map(username => username.toLowerCase());
// Loop through new users and check for uniqueness
for (let new_user of new_users) {
    if (current_users.includes(new_user)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different one.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
//Q,32
let ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinalNumber.length; i++) {
    let number = ordinalNumber[i];
    if (number === 1) {
        console.log(`ordinal number is--> "ist"`);
    }
    else if (number === 2) {
        console.log(`ordinal number is--> "2nd"`);
    }
    else if (number === 3) {
        console.log(`ordinal number is--> "3rd"`);
    }
    else if (number === 4) {
        console.log(`ordinal number is--> "4th"`);
    }
    else if (number === 5) {
        console.log(`ordinal number is--> "5th"`);
    }
    else if (number === 6) {
        console.log(`ordinal number is--> "6th"`);
    }
    else if (number === 7) {
        console.log(`ordinal number is--> "7th"`);
    }
    else if (number === 8) {
        console.log(`ordinal number is--> "8th"`);
    }
    else if (number === 9) {
        console.log(`ordinal number is--> "9th"`);
    }
}
//Q32 
let favoritePizzas = ["Pepperoni Pizza", "Bonefire Pizza", "chicken fajita pizza"];
for (let i = 0; i < favoritePizzas.length; i++) {
    let pizzaName = favoritePizzas[i];
    console.log(pizzaName);
}
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]}`);
}
console.log("\nI really love pizza!");
//Q.34
let pets = ["Hourse", "Dog", "Cat"];
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}
for (let i = 0; i < pets.length; i++) {
    console.log(`A ${pets[i]} would make a great pet.`);
}
console.log(`These animals have a commonality of being domesticated and often kept as pets, `);
//Q.35
function make_shirt(size, message) {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
}
// Call the function with the desired T-shirt size and message
make_shirt("Medium", "Hello, World!");
//Q.36 
function make_shirtL(size = "Large", message = "I love TypeScript") {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
}
make_shirtL();
make_shirtL("Medium");
make_shirtL("Samll", "TypeScript is Awesome!");
