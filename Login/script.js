// Getting value from user and validating it 

// Function to validate the sign-up form
function validation() {
    var username = document.getElementById("name").value;
    var emailid = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var conformpass = document.getElementById("conformpass").value;
    var notification = document.getElementById("notification");

    if (username.trim() === "" || emailid.trim() === "" || password.trim() === "" || conformpass.trim() === "") {
        notification.innerHTML = "Please fill in all the fields.";
        notification.classList.add("error");
        notification.style.display = "block";
        return false;
    } else if (password !== conformpass) {
        notification.innerHTML = "Passwords do not match.";
        notification.classList.add("error");
        notification.style.display = "block";
        return false;
    } else {
        notification.style.display = "none";
        return true;
    }
}



// creating a function to validate a login form

// Function to validate the login form
function login() {
    var emailid = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var notification = document.getElementById("notification");

    if (emailid.trim() === "" || password.trim() === "") {
        notification.innerHTML = "Please fill in both email and password.";
        notification.classList.add("error");
        notification.style.display = "block";
        return false;
    } else {
        notification.style.display = "none";
        return true;
    }
}

