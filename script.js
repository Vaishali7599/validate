const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const submitButton = document.getElementById('submitButton');

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
    }
}

// Submit event handler
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!emailError.textContent && !passwordError.textContent) {
        const isConfirmed = confirm('Do you want to proceed with the signup?');
        if (isConfirmed) {
            alert('Successful signup!');
        } else {
            // Redirect to the same page and clear inputs
            window.location.reload();
        }
    }
});
