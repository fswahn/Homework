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
  daysinMarch = 'March has 31 days';
 //Do you know javascript
  jsIntel = 'I beggining to learn js';
 //A list of the best restaurant in Rockville
  restntList = [
  'Buffalo Wings',
  'Sub-way',
  'Chipotle',
  'Wenddys',
  'High 5'
  ];
 //Expected annual salary of a Web developer
  webdesignerSalary = '95000 dollars';


 //Problem 2


//1 The price of a $20 drink plus 25% sales tax
 var amount1,
     amount2;
      amount1 = 20;
      amount2 = 20*0.25;
 console.log('The price of a 20 dollar drink with a 25% sales tax');
 console.log(amount1 + amount2);

//2 The cost of a $400 smartphone after a 15% discount
 var cost,
     disCnt,
     cost = 400;
     disCnt = 400*0.15;
 
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

 var Ename = 'editor';

 function editorname(Ename) {
 var editor

 if (Ename === 'Eclipse') {
 	editor = 'Java developer';
 } else if (Ename === 'Aptana Studio') {
 	editor = 'Web developer';
   } else if (Ename === 'Sublime Text') {
 	  editor = 'I am awesome';
     } else (Ename === 'Notepad'); {
       editor = 'Wrong editor';	
       }   

       return editor;
 	
 }

 console.log(editorname(Ename));
 console.log(editorname('Ecilpse'));
 console.log(editorname('Aptana Studio'));


//Problem 4
//Write a loop that iterates the numbers from 5 to 15. You can write this as a for or while loop.
//Each loop iteration should send the value of i to the console.

var num,
    i;

for(i = 5; i <= 15; i++) {
	num += '   number + ' + i + '.';
} 

console.log(num);

//Problem 5 
//Write a function average that takes three arguments: num1, num2, num3.
//The function will return(i.e. do not use console.log) the average of the three arguments.
// To get the average you will add them together and divide the total by three.

function average(num1, num2, num3) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	num3 = parseFloat(num3);
	return ((num1 + num2 + num3) / 3);
}


//Problem 6

//What is the hardest part to learn about Javascript?
//Well for me ... it would be the placement of variables and functions ... how can they ...
//interact with each other and viceversa ... is a bit confusiog when you combine that with ...
//different opperators and loops.
