const firstNameSpan = document.querySelector('#firstname-span');
const lastNameSpan = document.querySelector('#lastname-span');
const emailSpan = document.querySelector('#email-span');
const passwordSpan = document.querySelector('#password-span');

const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const validate = () => {
	if (firstNameInput.value === '') {
		firstNameSpan.classList.add('error');
		firstNameInput.placeholder = '';
	}
	if (lastNameInput.value === '') {
		lastNameSpan.classList.add('error');
		lastNameInput.placeholder = '';
	}
	if (emailInput.value === '') {
		emailSpan.classList.add('error');
		emailInput.placeholder = 'abc@gmail.com';
	}
	if (passwordInput.value === '') {
		passwordSpan.classList.add('error');
		passwordInput.placeholder = '';
	}
	return false;
};

firstNameInput.addEventListener('focus', () => {
	firstNameSpan.classList.remove('error');
	firstNameInput.placeholder = 'First Name';
});
lastNameInput.addEventListener('focus', () => {
	lastNameSpan.classList.remove('error');
	lastNameInput.placeholder = 'Last Name';
});
emailInput.addEventListener('focus', () => {
	emailSpan.classList.remove('error');
	emailInput.placeholder = 'Email Address';
});
passwordInput.addEventListener('focus', () => {
	passwordSpan.classList.remove('error');
	passwordInput.placeholder = 'Password';
});
