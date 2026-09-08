const passwordInput = document.getElementById("password-input");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.onclick = function() {
if (passwordInput.type === "password") {
    passwordInput.type = "text";
} else {
    passwordInput.type = "password";
}
}

const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");

checkBtn.onclick = function() {
const password = passwordInput.value;

if (password.length < 8) {
    resultText.textContent = "Your password is not long enough";
} else if (password.length > 16) {
    resultText.textContent = "Your password is too long";
} else if (password === password.toLowerCase()) {
    resultText.textContent = "Missing an uppercase letter";
} else if (password === password.toUpperCase()) {
    resultText.textContent = "Missing a lowercase letter";
} else if (!/[0-9]/.test(password)) {
    resultText.textContent = "Must contain a number";
} else if (!/[!@#$]/.test(password)) {
    resultText.textContent = "Missing a special character";
} else {
    resultText.textContent = "Your password is valid";
}
};