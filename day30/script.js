if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}
if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify([]));
}
if (!localStorage.getItem('notifications')) {
    localStorage.setItem('notifications', JSON.stringify([]));
}

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const postForm = document.getElementById('post-form');
const postsContainer = document.getElementById('posts-container');
const notificationList = document.getElementById('notification-list');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.username === username && u.email === email && u.password === password);

    if (user) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
    } else {
        alert('Invalid credentials!');
    }
});

postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = document.getElementById('post-text').value;
    const image = document.getElementById('post-image').files[0];
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (user) {
        const posts = JSON.parse(localStorage.getItem('posts'));
        const newPost = { text, image: image ? URL.createObjectURL(image) : null, username: user.username, likes: 0, comments: [] };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    } else {
        alert('You need to be logged in to post!');
    }
});

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image" style="max-width: 100%;">` : ''}
            <div class="actions">
                <button class="like-btn">Like (${post.likes})</button>
                <button class="comment-btn">Comment (${post.comments.length})</button>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

displayPosts();

function showNotification(message) {
    const notifications = JSON.parse(localStorage.getItem('notifications'));
    notifications.push(message);
    localStorage.setItem('notifications', JSON.stringify(notifications));
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification');
    notificationElement.textContent = message;
    notificationList.appendChild(notificationElement);
}

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        if (loggedInUser && post.username === loggedInUser.username) {
            postElement.classList.add('logged-in-user');
        }
        
        postElement.innerHTML = `
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image">` : ''}
            <div class="actions">
                <button class="like-btn">Like (${post.likes})</button>
                <button class="comment-btn">Comment (${post.comments.length})</button>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}