document.addEventListener('DOMContentLoaded', function () {
    const createPostButton = document.getElementById('toggle-form');
    const postForm = document.getElementById('post-form');
    const createPostForm = document.getElementById('create-post-form');
    const postsList = document.getElementById('posts');


    createPostButton.addEventListener('click', function () {
        postForm.style.display = postForm.style.display === 'none' ? 'block' : 'none';
    });

    createPostForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const imageInput = document.getElementById('image');
        const videoInput = document.getElementById('video');

        if (title.trim() === '' || content.trim() === '') {
            alert('Please fill in both title and content fields.');
            return;
        }

        const formattedContent = content.replace(/\n/g, '<br>');


        const postItem = document.createElement('li');
        postItem.innerHTML = `
            <h3>${title}</h3>
        `;

        // Check if an image file was selected
        if (imageInput.files.length > 0) {
            const imageFile = imageInput.files[0];
            const imageURL = URL.createObjectURL(imageFile);
            postItem.innerHTML += `<img class='image' src="${imageURL}" alt="Image">`;
        }

        postItem.innerHTML += `
            <p>${formattedContent}</p>
        `;

        // Check if a video file was selected
        if (videoInput.files.length > 0) {
            const videoFile = videoInput.files[0];
            const videoURL = URL.createObjectURL(videoFile);
            postItem.innerHTML += `<video class='video' controls><source src="${videoURL}" type="video/mp4"></video>`;
        }

        postsList.appendChild(postItem);

        // Clear the form fields
        document.getElementById('title').value = '';
        imageInput.value = '';
        document.getElementById('content').value = '';
        
        videoInput.value = '';

        // Hide the form after submission
        postForm.style.display = 'none';
        
    });
});

