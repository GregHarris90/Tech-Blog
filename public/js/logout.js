// LOGOUT HANDLER
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        // Send a POST request to the API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

// Event listener for logout button
document.querySelector('#logout').addEventListener('click', logout);