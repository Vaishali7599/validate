// Get the necessary elements from the form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

// Create error/success message containers
const emailError = document.createElement('div');
emailError.style.color = 'red';
emailInput.insertAdjacentElement('afterend', emailError);

const passwordError = document.createElement('div');
passwordError.style.color = 'red';
passwordInput.insertAdjacentElement('afterend', passwordError);

const successMessage = document.createElement('span');
successMessage.style.color = 'green';
successMessage.style.display = 'none';
submitButton.insertAdjacentElement('afterend', successMessage);

// Email validation function
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.textContent = '';
        checkValidation();
    } else {
        emailError.textContent = 'Invalid email format.';
        successMessage.style.display = 'none';
    }
});

// Password validation function
passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;
    if (passwordValue.length > 8) {
        passwordError.textContent = '';
        checkValidation();
    } else {
        passwordError.textContent = 'Password must be more than 8 characters.';
        successMessage.style.display = 'none';
    }
});

// Check if both fields are valid
function checkValidation() {
    if (!emailError.textContent && !passwordError.textContent) {
        successMessage.style.display = 'block';
        successMessage.textContent = 'All good to go!';
    } else {
        successMessage.style.display = 'none';
    }
}

// Submit event handler
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Check if there are no validation errors
    if (!emailError.textContent && !passwordError.textContent) {
        const isConfirmed = confirm('Do you want to proceed with the signup?');
        if (isConfirmed) {
            alert('Successful signup!');
        } else {
            // Clear the form inputs and reload the page
            emailInput.value = '';
            passwordInput.value = '';
            window.location.reload();
        }
    }
});
