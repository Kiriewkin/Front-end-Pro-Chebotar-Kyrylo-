import { loadPosts, createPost } from "./posts.js";

const postContainer = document.querySelector(`#postsContainer`);
const postForm = document.querySelector(`#postForm`);
const message = document.querySelector(`#message`);

document.addEventListener(`DOMContentLoaded`,() => {
    loadPosts(postContainer);
    postForm.addEventListener(`submit`,(event) => createPost(event,postForm,message,postContainer))
})