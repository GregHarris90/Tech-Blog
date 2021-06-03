const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the comment post form
    const comment = document.querySelector('#comment-post').value.trim();

    // Send a POST request to the API endpoint
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ id, comment }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create comment!');
    }
};

// Event listener for new post button
document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);