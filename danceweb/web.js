const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        fullname: fullname,
        email: email,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    form.reset();
    window.location.href = "login.html";

    // Go to login page
    form.reset();
});