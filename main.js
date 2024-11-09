const postContainer = document.querySelector(`#postsContainer`);
const postForm = document.querySelector(`#postForm`);
const message = document.querySelector(`#message`);

async function loadPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
        if (!response.ok) throw new Error("Failed to load posts");
        
        const posts = await response.json();
        posts.forEach(post => {
            const postDiv = document.createElement(`div`);
            postDiv.classList.add(`post`);
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
                <div class="comments" id="comments-${post.id}"></div>
            `;
            postContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

async function loadComments(postId, button) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
        if (!response.ok) throw new Error(`Failed to load comments for post ${postId}`);
        
        const comments = await response.json();
        const commentsDiv = document.getElementById(`comments-${postId}`);
        commentsDiv.innerHTML = comments.map(comment => `
            <div class="comment">
                <p><strong>${comment.name}</strong> (${comment.email})</p>
                <p>${comment.body}</p>
            </div>
        `).join("");
        
        button.disabled = true;
    } catch (error) {
        console.error(`Error loading comments for post ${postId}:`, error);
    }
}

async function createPost(event) {
    event.preventDefault();
    const title = document.querySelector(`#title`).value;
    const body = document.querySelector(`#body`).value;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });

        if (!response.ok) throw new Error("Failed to create post");

        const newPost = await response.json();
        message.textContent = "Пост успешно создан";
        displayNewPost(newPost);
        postForm.reset();
    } catch (error) {
        console.error("Error creating post:", error);
        message.textContent = "Ошибка при создании поста";
    }
}

function displayNewPost(post) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
        <div class="comments" id="comments-${post.id}"></div>
    `;
    postContainer.prepend(postDiv);
}

loadPosts();
postForm.addEventListener("submit", createPost);