let users = [];
    let posts = [];
    let currentUser = null;

    window.onload = function () {
        checkAuth();
    };

    function checkAuth() {
        if (sessionStorage.getItem('currentUser')) {
            currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            showDashboard();
        } else {
            document.getElementById('auth-section').style.display = 'block';
        }
    }

    function showLogin() {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('registration-form').style.display = 'none';
    }

    function showRegistration() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('registration-form').style.display = 'block';
    }

    function login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            showDashboard();
        } else {
            alert('Invalid username or password');
        }
    }

    function register() {
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        const user = { username, email, password };
        users.push(user);
        alert('Registration successful! Please log in.');
        showLogin();
    }

    function showDashboard() {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
        document.getElementById('profile-username').innerText = currentUser.username;
        document.getElementById('profile-email').innerText = currentUser.email;
        loadPosts();
    }

    function editProfile() {
        const newUsername = prompt('Enter new username:', currentUser.username);
        const newEmail = prompt('Enter new email:', currentUser.email);

        if (newUsername) currentUser.username = newUsername;
        if (newEmail) currentUser.email = newEmail;

        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('profile-username').innerText = currentUser.username;
        document.getElementById('profile-email').innerText = currentUser.email;
    }

    function logout() {
        sessionStorage.removeItem('currentUser');
        currentUser = null;
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('auth-section').style.display = 'block';
    }

    function createPost() {
        const content = document.getElementById('post-content').value;
        const imageInput = document.getElementById('post-image');
        const imageFile = imageInput.files[0];

        if (content || imageFile) {
            const post = {
                username: currentUser.username,
                content,
                image: imageFile ? URL.createObjectURL(imageFile) : null,
                likes: 0,
                comments: [],
                timestamp: new Date().toLocaleString(),
            };

            posts.push(post);
            document.getElementById('post-content').value = '';
            imageInput.value = '';
            loadPosts();
        } else {
            alert('Post content cannot be empty');
        }
    }

    function loadPosts() {
        const feed = document.getElementById('post-feed');
        feed.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h3>${post.username}</h3>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <small>${post.timestamp}</small>
                <div class="actions">
                    <button class="like-btn" onclick="likePost(${posts.indexOf(post)})">Like (${post.likes})</button>
                    <button class="comment-btn" onclick="commentPost(${posts.indexOf(post)})">Comment (${post.comments.length})</button>
                </div>
            `;

            feed.appendChild(postElement);
        });
    }

    function likePost(index) {
        posts[index].likes += 1;
        loadPosts();
        notifyUser(`${posts[index].username} liked your post.`);
    }

    function commentPost(index) {
        const comment = prompt('Enter your comment:');
        if (comment) {
            posts[index].comments.push(comment);
            loadPosts();
            notifyUser(`${posts[index].username} commented on your post.`);
        }
    }

    function notifyUser(message) {
        const notificationList = document.getElementById('notification-list');
        const notification = document.createElement('li');
        notification.innerText = message;
        notificationList.appendChild(notification);
    }