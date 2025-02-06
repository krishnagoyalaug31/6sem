// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Basic client-side validation (You should add more robust validation on server)
    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password are required.";
        return;
    }

    // Placeholder logic (Replace with your actual login logic)
    if (username === 'testuser' && password === 'password') {  // Example credentials (REMOVE in production)
        errorMessage.textContent = ""; // Clear any previous errors
        alert('Login Successful!');
        // Redirect or perform action upon successful login
        window.location.href = "welcome.html"; // Example: Redirect to a welcome page
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});