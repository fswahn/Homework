// JavaScript Document
// Hw 5 CA276

//Problem 1
document.getElementById('w3cExercise').onclick = function() {
	var dl, dt, dd, textNode, text, textNode2, text2;

	text = 'La llama'
	textNode = document.createTextNode(text);

	text2 = 'The llama is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since pre-Hispanic times. '
	textNode2 = document.createTextNode(text2);

	//Creating the first node (dl)
	dl = document.createElement('dl');

	dt = document.createElement('dt');
	//Attaching text node #1 to the dt node
	dt.appendChild(textNode);
	//Attaching the dt node to the dl node
	dl.appendChild(dt);

	//Creating the second node (dd)
	dd = document.createElement('dd');
	//Attaching text node #1 to the dt node
	dd.appendChild(textNode2);
	//Attaching the dt node to the dl node
	dl.appendChild(dd);

	//Append the dl node to the page
	document.body.appendChild(dl);
};

//Problem 2
document.getElementById('innerHTMLExercise').onclick = function() {
	var dl, dt, dd, textNode, text, textNode2, text2, definitions;

	//... just adding in case ... not sure if it is still needed
	text = 'La llama'
	textNode = document.createTextNode(text);

	text2 = 'The llama is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since pre-Hispanic times. '
	textNode2 = document.createTextNode(text2);

	// Finding the inner parent to insert into
	definitions = document.getElementById('definitions');

	// adding into the HTML div definitions
	definitions.innerHTML += '<dl><dt>La llama</dt></dl>';
	definitions.innerHTML += '<dl><dd>The llama is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since pre-Hispanic times. </dd></dl>';

	//comment: both this way and in the jquery had the same error: Uncaught SyntaxError: Unexpected token ILLEGAL ... 
	//I suspect is for the multiple subtags contained into one tag (dl>dt&dd) ... I couldn't find a way to connect them in one go ...

	//definitions.innerHTML +=
	//'<dl><dt>La llama</dt><dd>The llama is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since pre-Hispanic times.</dd>
	//     </dl></dl>';


};

//Problem 3

$('#jQueryExercise').on('click', function() {

	//Locating the parent using CSS selector
	$('#definitions')




	//.append('<dl>
	//<dt>La llama</dt>
	//<dd>The llama is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since pre-Hispanic times.</dd></dl>');

	.append('<dl><dt>La llama</dt></dl>')
		.append('<dl><dd>The llama is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since pre-Hispanic times. </dd></dl>');
});