const passwordInput = document.getElementById("password-input");
const toggleBtn = document.getElementById("toggle-btn");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const strengthFill = document.getElementById("strength-bar-fill");
const crackTimeText = document.getElementById("crack-time");

// Eye toggle - show/hide password
toggleBtn.onclick = function() {
if (passwordInput.type === "password") {
    passwordInput.type = "text";
} else {
    passwordInput.type = "password";
}
};

// Live strength bar + crack time - updates as you type
passwordInput.oninput = function()
{const password = passwordInput.value;
let score = 0;

if (password.length >= 8 && password.length <= 16) score++;
if (password !== password.toLowerCase()) score++;
if (password !== password.toUpperCase()) score++;
if (/[0-9]/.test(password)) score++;
if (/[!@#$]/.test(password)) score++;

  const percent = (score / 5) * 100;
strengthFill.style.width = percent + "%";

if (score <= 2) {
    strengthFill.style.backgroundColor = "#aa4444";
} else if (score <= 4) {
    strengthFill.style.backgroundColor = "#d4a544";
} else {
    strengthFill.style.backgroundColor = "#4caa5c";
}

  // Crack time estimate
let poolSize = 0;
if (/[a-z]/.test(password)) poolSize += 26;
if (/[A-Z]/.test(password)) poolSize += 26;
if (/[0-9]/.test(password)) poolSize += 10;
if (/[!@#$]/.test(password)) poolSize += 4;

const combinations = Math.pow(poolSize, password.length);
const guessesPerSecond = 1000000000;
const secondsToCrack = combinations / guessesPerSecond;

let displayTime;
if (password.length === 0) {
    displayTime = "";
} else if (secondsToCrack < 1) {
    displayTime = "Instantly";
} else if (secondsToCrack < 60) {
    displayTime = Math.round(secondsToCrack) + " seconds";
} else if (secondsToCrack < 3600) {
    displayTime = Math.round(secondsToCrack / 60) + " minutes";
} else if (secondsToCrack < 86400) {
    displayTime = Math.round(secondsToCrack / 3600) + " hours";
} else if (secondsToCrack < 31536000) {
    displayTime = Math.round(secondsToCrack / 86400) + " days";
} else {
    displayTime = Math.round(secondsToCrack / 31536000) + " years";
}

crackTimeText.textContent = password.length === 0 ? "" : "Estimated crack time: " + displayTime;
};

// Check button - shows specific missing requirement
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