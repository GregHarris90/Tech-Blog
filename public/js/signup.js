// SIGNUP FORM HANDLER
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the signup form
    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

// Event listener for new post button
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);