

const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('submit', (e) => {
    if (passwordInput.value.length < 8 || !passwordInput.value.match(/[a-z]/) || !passwordInput.value.match(/[A-Z]/) || !passwordInput.value.match(/\d/) || !passwordInput.value.match(/[!@#$%^&*(),.?":{}|<>]/) ) {
        passwordError.innerText = 'Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one special character.';
        passwordError.style.display = 'block';
        e.preventDefault();
    } else {
        passwordError.style.display = 'none';
    }
});