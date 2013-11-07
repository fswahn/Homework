//Homework 3

//Problem 1
//console math problems

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);

//Problem 2 'Cookie Thief'
//if and else if statements

function saysomething() {
	var cookieThief;

	cookieThief = 'Dad';

	if (cookieThief === 'Dad') {
		console.log('He\'s going to be in trouble')
	} else if (cookieThief === 'Mom') {
		console.log('No big deal.')
	} else if (cookieThief === 'Me') {
		console.log('No more cookies for you.')
	} else {
		console.log('Johnny did it.')
	}
}

saysomething();


//Problem 3 Bolean conditions
//if statement for boolean condition



function classRoom(roomClass) {
	var day,
		time,
		room;

	day = "Thursday";
	time = "6:30pm";
	room = "HU 317";

	if (day === 'Thursday' && time === '6:30pm' && room === 'HU 317') {
		return 'You are in CA276';
	} else {
		return 'You are not in CA276';
	}
}

//Problem 4 


var bartSimpson1 = '';
i = 0;

//JG: The problem asked for a string concatentation, not 10 individual calls to console.log
while (i < 10) {
	bartSimpson1 += 'I will not make fun of the teacher using JavaScript code. ';
	i++;
}

console.log(bartSimpson1);

//Problem 5

var bartSimpson2 = '',
	e;

//JG: This loop has the same bug as Problem 4
for (e = 0; e < 10; e++) {
	bartSimpson2 += 'I will not make fun of the teacher using JavaScript code. ';
}

console.log(bartSimpson2);