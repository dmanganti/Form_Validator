const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Success outline on Input box
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Checks if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'Email is required');
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    }else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Password is required');
    } else if(password.length < 8) {
        showError(password, 'Password must be atleast 8 characters');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'Passwords is required');
    } else if (password2.value != password.value) {
        showError(password2, 'Passwords do not match');
    } else {
        showSuccess(password2);
    }
});