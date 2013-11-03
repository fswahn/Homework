// JavaScript Document

//Problem 1

var athlete1 = {};
athlete1.name = 'Joth';
athlete1.height = '5.10"';
athlete1.age = 23;
athlete1.countryofOrigin = 'Sweden';
athlete1.addMedals = ['gold', 'silver', 'gold', 'gold'];
athlete1.olympianMaterial = true;
athlete1.method = function () {
	return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
}

console.log(athlete1);
	
//Problem 2

var athlete2 = {};
athlete2['name'] = 'Jack';
athlete2['height'] = '6.3"';
athlete2['age'] = 28;
athlete2['countryofOrigin'] = 'Spain';
athlete2['addMedals'] = ['silver', 'bronze', 'bronze'];
athlete2['olympianMaterial'] = false;
athlete2['method'] = function () {
	return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
}

console.log(athlete2);

//Problem 3

var athlete3 = {
    name : 'Sam',
	height : '5.6\"',
	age : 31,
	countryofOrigin : 'Brazil',
	addMedals : ['gold', 'gold', 'silver', 'bronze', 'gold', 'silver'],
	olympianMaterial : true,
	introduce : function () {
		return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
	}
};

//Problem 4

function Athlete(name, height) {
	this.name = name;
	this.height = height;
	this.introduce = function () {
		return 'Hello! My name is ' + this.name + 'and I am from ' + this.countryofOrigin;
	};
}

var athlete4 = new Athlete('Frederick', '1.98"');

//Problem 5

function TenniPlayer(name, height, age, countryofOrigin, addMedals, olympianMaterial,) {
	this.name = name;
	this.age = age;
	this.countryofOrigin = countryofOrigin;
	this.height = height;
	ths.addMedals = addMedals; 
	this.olympianMaterial = olympianMaterial;
	this.slogan = function () {
       if (slogan === 'training')
		return 'no pain no gain'
	};

}

TenniPlayer.prototype = new Athlete();
TenniPlayer.prototype.construtor = Athlete;

var s1;

s1 = new TenniPlayer('Robert Chalaca', '26 years', 'Italy', '1.98cm', ['gold', 'silver', 'gold', 'gold'], true, 'training');

s1.slogan();

console.log(s1 instanceof Athlete);
