document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username }));
        alert('Login successful!');
        window.location.hash = 'posts';
    } else {
        alert('Please enter username and password.');
    }
});

const posts = JSON.parse(localStorage.getItem('posts')) || [];

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('post-text').value;
    const image = document.getElementById('post-image').value;
    const user = JSON.parse(localStorage.getItem('user'));

    const post = {
        text,
        image,
        username: user ? user.username : 'Anonymous',
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };

    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
    this.reset();
});

function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <strong>${post.username}</strong> <span>${post.timestamp}</span>
            </div>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <div class="post-footer">
                <button class="like-button">Like (${post.likes})</button>
                <button class="comment-button">Comment (${post.comments.length})</button>
            </div>
        `;
        postFeed.appendChild(postElement);
    });
}

displayPosts();

document.getElementById('post-feed').addEventListener('click', function(event) {
    if (event.target.classList.contains('like-button')) {
        const index = Array.from(event.target.parentElement.parentElement.parentElement.children).indexOf(event.target.parentElement.parentElement);
        posts[index].likes++;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }

    if (event.target.classList.contains('comment-button')) {
        const index = Array.from(event.target.parentElement.parentElement.parentElement.children).indexOf(event.target.parentElement.parentElement);
        const comment = prompt('Enter your comment:');
        if (comment) {
            posts[index].comments.push(comment);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
    }
});
