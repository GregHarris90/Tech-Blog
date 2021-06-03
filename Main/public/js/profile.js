// BLOG POST FORM HANDLER
const newFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the blog post form
    const title = document.querySelector('#blog-title').value.trim();
    const post = document.querySelector('#blog-post').value.trim();

    // Send a POST request to the API endpoint
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, post }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
    } else {
        alert('Failed to create blog post!');
    }
};

// DELETE BUTTON HANDLER
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            alert('Failed to delete blog post!');
        }
    }
};

// Event listener for new post button
document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

// Event listener for delete button
document
    .querySelector('.delete-blog-post')
    .addEventListener('click', delButtonHandler);
