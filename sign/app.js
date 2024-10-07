const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    container.classList.remove("left-panel-active"); // Remove left panel active if present
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    container.classList.add("left-panel-active"); // Add left panel active
});

document.addEventListener("DOMContentLoaded", function () {
    // Sign-up form event
    const signUpForm = document.querySelector('.sign-up-container form');
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get input values
        const name = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;

        // Store data in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Redirect to sign-in page
        window.location.reload(); // Change the path to your actual sign-in page
    });

    // Sign-in form event
    const signInForm = document.querySelector('.sign-in-container form');
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get input values
        const email = signInForm.querySelector('input[type="email"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;

        // Get stored data from localStorage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Check if the entered email and password match stored values
        if (email === storedEmail && password === storedPassword) {
            // Redirect to menu page
            window.location.href = '../menu/index.html'; // Change the path to your actual menu page
        } else {
            alert('Invalid email or password \n Have you signed up??');
            window.location.reload();
        }
    });
});

