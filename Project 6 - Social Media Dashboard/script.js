document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const postForm = document.getElementById('post-form');
    const feedSection = document.getElementById('feed-section');
    const postSection = document.getElementById('post-section');
    const feed = document.getElementById('feed');
    const posts = [];

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        localStorage.setItem('username', username);
        const password = document.getElementById('password').value;        
        localStorage.setItem('password', password);
        loginForm.parentElement.style.display = 'none';
        postSection.style.display = 'block';
        feedSection.style.display = 'block';
    });

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const text = document.getElementById('post-text').value;
        const fileInput = document.getElementById('post-image');
        const image = fileInput.files[0] ? URL.createObjectURL(fileInput.files[0]) : null;
        const username = localStorage.getItem('username');
        const timestamp = new Date().toLocaleString();
       
        const post = {
            username,
            text,
            image,
            timestamp,
            likes: 0,
            comments: []
        };
        posts.push(post);
        displayPosts();
        postForm.reset();
    });

    function displayPosts() {
        feed.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.username}</h3>
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <small>${post.timestamp}</small>
                <div class="actions">
                    <button class="like-btn">Like (${post.likes})</button>
                    <button class="comment-btn">Comment</button>
                </div>
            `;
           
            const likeButton = postElement.querySelector('.like-btn');
            likeButton.addEventListener('click', () => {
                post.likes += 1;
                displayPosts();
            });

            const commentButton = postElement.querySelector('.comment-btn');
            commentButton.addEventListener('click', () => {
                const comment = prompt('Enter your comment:');
                if (comment) {
                    post.comments.push(comment);
                    alert('Comment added!');
                }
            });

            feed.appendChild(postElement);
        });
    }
});