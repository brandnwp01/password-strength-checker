# Password Strength Checker

A tool that checks password strength in real time and estimates how long it would take to crack — built to mimic how real login systems and security tools evaluate password security.

**Live demo:** https://brandnwp01.github.io/password-strength-checker/

## Features
- Checks length, uppercase/lowercase letters, numbers, and special characters
- Live strength meter that fills and changes color (red → yellow → green) as you type
- Estimated crack time, calculated from character pool size and password length
- Show/hide password toggle

## Python version
`password_checker.py` — a terminal script version. Enter a password and get feedback in a loop until it passes all checks.

## Web version
A browser-based version with a custom-styled interface (HTML, CSS, JS). All feedback — the strength bar, crack time estimate, and specific requirement checks — updates live as you type or click Check.

## How the crack time is calculated
The script determines a character "pool size" based on which character types are used (lowercase, uppercase, numbers, symbols), then calculates total possible combinations (`pool size ^ password length`) and divides by an estimated 1 billion guesses per second — a common benchmark for offline password-cracking attempts.