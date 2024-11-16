import { fetchData } from "./api.js";

export async function loadComments(postId, button) {
    try {
        const comments = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
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