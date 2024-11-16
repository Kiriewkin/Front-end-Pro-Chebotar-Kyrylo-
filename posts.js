import { fetchData } from "./api.js";
import { loadComments } from "./comments.js";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function loadPosts(container) {
    try {
        const posts = await fetchData(`${API_URL}?_limit=10`);
        posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="load-comments" data-post-id="${post.id}">Завантажити коментарі</button>
                <div class="comments" id="comments-${post.id}"></div>
            `;
            
            const button = postDiv.querySelector(".load-comments");
            button.addEventListener("click", () => loadComments(post.id, button));
        
            container.appendChild(postDiv);
        });
        
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

export async function createPost(event,form,message,container) {
    event.preventDefault();
    const title = document.querySelector(`#title`).value;
    const body = document.querySelector(`#body`).value;

    try {
        const newPost = await fetchData(API_URL,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title,body, userId: 1})
        });

        message.textContent = "Пост успешно создан";
        displayNewPost(newPost, container);
        form.reset();
    } catch (error) {
        console.error("Error creating post:", error)
        message.textContent = "Ошибка при создании поста";
    }
}

function displayNewPost(post,container) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button class="load-comments" data-post-id="${post.id}">Завантажити коментарі</button>
        <div class="comments" id="comments-${post.id}"></div>
    `;
    container.prepend(postDiv);
}