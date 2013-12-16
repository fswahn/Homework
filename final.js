// Final Project js

var form = document.querySelector('form');
form.addEventListener('submit', function (e) {	
	var errors, i, errorDiv, namePattern, emailPattern, phonePattern, urlPattern, agePattern;

	errors= [];
	errorDiv = document.getElementById('error');

	//character validation
	namePattern = /^[a-z'-]+$/igm;
	emailPattern = /[a-z0-9_\-.]+@[a-z0-9]+\.[a-z]{2,}(.[a-z]{2,})?/igm;
	agePattern = /^[1-9]?[0-9]{1}$|^100$/;
	phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

	//Making sure first name is valid
	if (namePattern.test(this.first_name.value) === false) {
		errors.push('First name is required');
	}

	//Making sure last name is valid
	if (namePattern.test(this.last_name.value) === false) {
		errors.push('Last name is required');
	}

	//Making sure email is valid
	if (emailPattern.test(this.email.value) === false) {
		errors.push('E-mail is required');
	}


     //Age Validation
    if (agePattern.test(this.age.value) === false) {
		errors.push('Age is invalid');
	}

	//Making sure  both home and mobile number are vanid
	
    //Home number
	if (phonePattern.test(this.home_number.value) === false) {
		errors.push('Home number is invalid');
	}

	//Mobile number
	if (phonePattern.test(this.mobile_number.value) === false) {
		errors.push('Mobile number is invalid');
	}

	//Making sure Personal website is filled
	if (urlPattern.test(this.personal_url.value) === false) {
		errors.push('Personal website is invalid');
	}

	//Validation date Picker
			if (isDate(this.date.value) === false) {
					errors.push('Invalid datepicking');
			}

	//Making sure Experience level is selected
	if (this.level.value.length === 0) {
		errors.push('Please select a Experience Level');
	}

	//Making sure the Bio is filled up
	if (this.bio.value.length === 0) {
		errors.push('Bio must be filled up');
	}

	//Making sure both radio and checked buttons are selected

	//radio buttons
	if (document.querySelectorAll('[name=meal]:checked').length === 0) {
					errors.push('Please select at least one meal preference');
				}

	//cheched buttons
	if (document.querySelectorAll('[name=skills]:checked').length === 0) {
					errors.push('Please select at least one skill');
				}




	//If any inputs failed prevent form submit
				if (errors.length > 0) {
					//prevent form submit
					e.preventDefault();
					
					//unhide
					errorDiv.className = '';
					
					//clear out previous errors
					errorDiv.innerHTML = errors.join('<br>');
				}

}, false);

// date === 12/30/2013
			function isDate(date) {
				var dateParts;

				dateParts = date.split('/');

				if (dateParts.length !== 3) {
					return false;
				}

				// All numbers
				if (
					isNaN(parseFloat(dateParts[0])) || 
					isNaN(parseFloat(dateParts[1])) ||
					isNaN(parseFloat(dateParts[2]))
					) {
					return false;
				}

				// Month validation
				if (dateParts[0] < 1 && dateParts[0] > 12) {
					return false;
				}

				return true;
			}
