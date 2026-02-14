document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    alert("Account created for " + username);

    // Later you can save data or redirect
});