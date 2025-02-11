document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm");
    const apiData = document.getElementById("apiData");
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    // Fetch and display posts from API
    async function fetchPosts() {
        try {
            const response = await fetch(API_URL);
            const posts = await response.json();
            apiData.innerHTML = posts.slice(0, 5).map(post => `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `).join("");
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    // Handle form submission (POST request)
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const title = document.getElementById("title").value.trim();
        const body = document.getElementById("body").value.trim();

        if (!title || !body) {
            alert("Please fill out both fields.");
            return;
        }

        const newPost = { title, body };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost)
            });

            const result = await response.json();
            
            // Add new post to the UI
            const newPostElement = document.createElement("div");
            newPostElement.classList.add("post");
            newPostElement.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.body}</p>
            `;
            apiData.prepend(newPostElement);

            form.reset();
        } catch (error) {
            console.error("Error posting data:", error);
        }
    });

    fetchPosts();
});
