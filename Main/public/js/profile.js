const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const post = document.querySelector('#blog-post').value.trim();

        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, post }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create blog post!');
        }
    };

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete blog post!');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.delete-blog-post')
    .addEventListener('click', delButtonHandler);
