//HW6 JQuery selectors

//Problem1

//a
console.log(document.querySelectorAll('li'));

//b
console.log(document.querySelectorAll('ol li'));

//c
console.log(document.querySelectorAll('.highlight'));

//d
console.log(document.querySelectorAll('form *'));

//e
console.log(document.querySelectorAll('#movies, #companies, #fast_food'));

//f
//JG: Asterisk doesn't hurt, but you can leave it off
console.log(document.querySelectorAll('[id]'));

//g
console.log(document.querySelectorAll('[id$=s]'));

//h
console.log(document.querySelectorAll('li:first-child'));

//i
console.log(document.querySelectorAll('li:nth-child(2)'));

//j
console.log(document.querySelectorAll(':empty'));

//k
console.log(document.querySelectorAll(':checked'));

//l
console.log(document.querySelectorAll('input[type=radio]'));

//m
console.log(document.querySelectorAll('input[type=radio]:checked'));

//n
console.log(document.querySelectorAll('#names > tbody > tr > td:nth-child(3)'));

//o
console.log(document.querySelectorAll('.hidden:not(form)'));

//p
console.log(document.querySelectorAll('tbody tr:nth-child(even)'));

//q
console.log(document.querySelectorAll('tbody tr:nth-child(odd)'));


//Problem2 Optional