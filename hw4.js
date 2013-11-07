// JavaScript Document

//Problem 1

var athlete1 = {};
athlete1.name = 'Joth';
athlete1.height = '5.10"';
athlete1.age = 23;
athlete1.countryofOrigin = 'Sweden';
athlete1.medals = ['gold', 'silver', 'gold', 'gold'];
athlete1.olympianMaterial = true;
athlete1.method = function() {
	return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
}
athlete1.addMedal = function(medal) {
	this.medals.push(medal);
}

console.log(athlete1);

//Problem 2

var athlete2 = {};
athlete2['name'] = 'Jack';
athlete2['height'] = '6.3"';
athlete2['age'] = 28;
athlete2['countryofOrigin'] = 'Spain';
athlete2['medals'] = ['silver', 'bronze', 'bronze'];
athlete2['olympianMaterial'] = false;
athlete2['method'] = function() {
	return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
}
athlete2['medal'] = function(medal) {
	this['medals'].push(medal);
}

console.log(athlete2);

//Problem 3

var athlete3 = {
	name: 'Sam',
	height: '5.6\"',
	age: 31,
	countryofOrigin: 'Brazil',
	medals: ['gold', 'gold', 'silver', 'bronze', 'gold', 'silver'],
	olympianMaterial: true,
	introduce: function() {
		return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
	},
	addMedal = function(medal) {
		this.medals.push(medal);
	}
};

//Problem 4

function Athlete(name, height) {
	this.name = name;
	this.height = height;
	this.introduce = function() {
		return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
	};
	this.addMedal = function(medal) {
		this.medals.push(medal);
	}
}

var athlete4 = new Athlete('Frederick', '1.98"');

//Problem 5

//JG: The extra comma was throwing an error
//JG: You also misspelled TennisPlayer (the "s" was missing)
function TennisPlayer(name, height, age, countryofOrigin, medals, olympianMaterial) {
	this.name = name;
	this.age = age;
	this.countryofOrigin = countryofOrigin;
	this.height = height;
	//JG: This was throwing an error: ths -> this
	this.medals = medals;
	this.olympianMaterial = olympianMaterial;
	this.slogan = function() {
		//JG: I can't understand what you're trying to do.
		//JG: Perhaps the if condition should refer to another string variable?
		//JG: You have a conflict between the function name and the variable name.

		// if (slogan === 'training') {
		// 	return 'no pain no gain';
		// }
	};

}

TennisPlayer.prototype = new Athlete();
TennisPlayer.prototype.construtor = Athlete;

var s1;

s1 = new TennisPlayer('Robert Chalaca', '26 years', 'Italy', '1.98cm', ['gold', 'silver', 'gold', 'gold'], true, 'training');

console.log(s1.slogan());

//JG: Good test to run
console.log(s1 instanceof Athlete);