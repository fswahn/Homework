// JavaScript Document
// Frederick R. Swahn 
// 09/19/13 

//Exercise 2
var myEmail,
    myMayor,
	myFavTextEditor,
	myZcode,
	piValue, //JG: Variables shouldn't start with a capital letter
	bookCost,
	lightIsOn,
	supermanCanFly;

// E-mail account
myEmail = 'fswahn@montgomerycollege.edu';
// College Mayor 
myMayor = 'Simulation and Computer Gaming';
// Favorite Text Editor Software
myFavTextEditor = 'Adobe Dreamweaver';
// Zip Code 
myZcode = 20876;
// piValue up to the fifth decimal
piValue = 3.14159;
// Total cost for a ten dollar book plus 5% sales tax
bookCost = 10.5;
// Whether or not the light switch is on
lightIsOn = false;
// Whether or not Superman can fly
supermanCanFly = true;

 //Exercise 3
 //Variable console check
console.log(typeof myEmail);
console.log(typeof myMayor);
console.log(typeof myFavTextEditor);
console.log(typeof myZcode);
console.log(typeof piValue);
console.log(typeof bookCost);
console.log(typeof lightIsOn);
console.log(typeof supermanCanFly);

//Exercise 4
// String variable storage
var surprise,
    linK,
    javaScript;

// Dog surpise
surprise = 'The dog\'s bitting my shoe';
// link syntaxis 
linK = '<a href="#">Some link</a>';
// Js fact
javascript = 'Javascript is "easy" if you are good at it';

//Exercise 5
// Topic Array of things I would like to learn this semester
var myTopicArray;

//Array items
myTopicArray = [
    "JavaScript",
    "More Html",
    "More Css",
    "Web Design",
    "Maya",
    "Environment Biology",
    "Parkour",
    "Salsa",
    "Management",
    "Leadership Skills",
    "Zbrush",
    "More math",
    "More Unreal 4"
];

//Exercise 6
// Console check for the  new array
 console.log(myTopicArray[0]);
 console.log(myTopicArray[1]);
 console.log(myTopicArray[2]);
 console.log(myTopicArray[3]);
 console.log(myTopicArray[4]);
 console.log(myTopicArray[5]);
 console.log(myTopicArray[6]);
 console.log(myTopicArray[7]);
 console.log(myTopicArray[8]);
 console.log(myTopicArray[9]);
 console.log(myTopicArray[10]);
 console.log(myTopicArray[11]);
 console.log(myTopicArray[12]);

//Exercise 7
// Console check for the array length
 console.log(myTopicArray.length); 

//Exercise 8
//New function to operate button clickMe
//Define variable

document.getElementById('clickMe').onclick = function () {
	console.log('Leave me alone!');
};
