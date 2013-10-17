// Midterm CA276

//Problem 1

var course,
	daysinMarch,
	jsIntel,
	restntList,
	webdesignerSalary;

//The name of this coruse
course = 'ca276';
//Number of days in March
//JG: Should be a number
// daysinMarch = 'March has 31 days';
daysinMarch = 31;
//Do you know javascript
// JG: Should be a Boolean
jsIntel = true;
//A list of the best restaurant in Rockville
//JG: Array looks good
restntList = [
	//JG: Watch out for spelling mistakes
	'Buffalo Wings',
	'Subway',
	'Chipotle',
	'Wendy\'s',
	//JG: Never heard of this. Are their burgers any good?
	'High 5'
];

//JG: Good list of restaurants by the way.

//Expected annual salary of a Web developer
//JG: This should be a number
// webdesignerSalary = '95000 dollars';
webdesignerSalary = 95000;


//Problem 2


//1 The price of a $20 drink plus 25% sales tax
var amount1,
	amount2;

amount1 = 20;
//JG: It's always good to reuse your variables when it makes sense
amount2 = amount1 * 0.25;
console.log('The price of a 20 dollar drink with a 25% sales tax');
console.log(amount1 + amount2);

//2 The cost of a $400 smartphone after a 15% discount
var cost,
	disCnt,
	cost = 400;

disCnt = cost * 0.15;

console.log('The cost of a 400 dollar smartphone at 15% discount');
console.log(cost - disCnt);

//3 The cost of four $5 sub sandwiches
var cost2,
	numSandwiches;

cost2 = 5;
numSandwiches = 4;

console.log('The cost of 4 sub sandwiches at 5 dollars');
console.log(cost2 * numSandwiches);

//The cost of a $75 dinner split evenly among 5 people
var cost3,
	numPeople;

cost3 = 75;
numPeople = 5;
console.log('The cost of a 75 dollar dinner splitted evenly among 5 people');
console.log(cost3 / numPeople);

//5 0.1 multiplied by 0.2 Bonus: Round the result to two decimal places
var decm1,
	adtionalamount,
	decm2;

decm1 = 0.1;
adtionalamount = 0.01
decm2 = 0.2;
console.log('0.1 multiplied by 0.2 ... plus the result rounded two decimal places.');
console.log(decm1 * decm2 * adtionalamount);



//Problem 3

//1 if you editor is 'Ecilpse' then send "Java developer" to the console.
//2 if you editor is 'Aptana Stuido' then send "Web developer" to the console.
//3 if you editor is 'Sublime Text' then send "I am awesome" to the console.
//4 if you editor is 'Notepad' then send "Wrong editor" to the console.

//JG: Don't start variable names with capital letters
var sampleEditor = 'Notepad';

//JG: Use camel case
function editorName(editorName) {
	var response;

	if (editorName === 'Eclipse') {
		response = 'Java developer';
	} else if (editorName === 'Aptana Studio') {
		response = 'Web developer';
	} else if (editorName === 'Sublime Text') {
		response = 'I am awesome';
		//JG: There was a syntax error below. You had "else" instead of "else if".
	} else if (editorName === 'Notepad') {
		response = 'Wrong editor';
	}

	return response;
}

console.log(editorName(sampleEditor));
console.log(editorName('Eclipse'));
console.log(editorName('Aptana Studio'));


//Problem 4
//Write a loop that iterates the numbers from 5 to 15. You can write this as a for or while loop.
//Each loop iteration should send the value of i to the console.

var num,
	i;

//JG: console.log was showing 'undefined' at the beginning of your string
num = '';

for (i = 5; i <= 15; i++) {
	num += '   number + ' + i + '.';
}

console.log(num);

//Problem 5 
//Write a function average that takes three arguments: num1, num2, num3.
//The function will return(i.e. do not use console.log) the average of the three arguments.
// To get the average you will add them together and divide the total by three.

function average(num1, num2, num3) {
	//JG: Nice use of parseFloat! This will help avoid unwanted string concatenations.
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	num3 = parseFloat(num3);
	//JG: I got rid of superfluous parentheses.
	return (num1 + num2 + num3) / 3;
}


//Problem 6

//What is the hardest part to learn about Javascript?
//Well for me ... it would be the placement of variables and functions ... how can they ...
//interact with each other and viceversa ... is a bit confusiog when you combine that with ...
//different opperators and loops.

//JG: JavaScript is similar to C and Java in syntax. The good news is that once you get
// used to writing in this language you can pick up other ones more easily. The bad news
// is that other programming languages different in fundamental concepts such as inheritance
// and closures.