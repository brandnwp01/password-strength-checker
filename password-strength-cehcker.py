def password_checker(password):
    if len(password) < 8:  # Triggers if password is under 8 characters
        return print("Your password is not long enough")
    elif len(password) > 16:  # Triggers if password is over 16 characters
        return print("Your password is too long")
    elif password == password.lower():  # Triggers if no uppercase letter found
        return print("Missing an uppercase letter")
    elif password == password.upper():  # Triggers if no lowercase letter found
        return print("Missing a lowercase letter")
    elif not any(char.isdigit() for char in password):  # Triggers if no digit found
        return print("Must contain a number")
    elif not any(char in "!@#$" for char in password):  # Triggers if no special character found
        return print("Missing a special character")
    else:
        print("Your password is valid")  # All checks passed
        return "valid"


while True:
    user_input = input("Enter your password: ")  # Ask user for a password
    result = password_checker(user_input)  # Run it through all the checks
    if result == "valid":
        break