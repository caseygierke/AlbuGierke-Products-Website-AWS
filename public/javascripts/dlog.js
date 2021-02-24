
const API_URL = "http://localhost:3000/dlog/api/posts";
const API_BASE_URL = "http://localhost:3000/";

// Define what happens initially
window.onload = () => {
    getPosts();
}

// Define getPosts function
const getPosts = () => {
    // Retrieve data from API
    fetch(API_URL, {
        method: "GET"
    }).then((response) => {
        // Return the response as json data
        return response.json();
    }).then((data) => {
        // Call the buildPost function
        buildPosts(data);
    })
}

// Define the buildPosts function
const buildPosts = (blogPosts) => {
    // Define initial empty blogPostsContent
    let blogPostsContent = "";
    
    // Loop through blogPosts returned from API
    for (blogPost of blogPosts){
        
        // Get date and convert to string
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        // Get image
        const postImage = `${API_BASE_URL}${blogPost.post_image}`;
        // Define link
        const postLink = `/dlog/individual-post?id=${blogPost.id}`;
        // Add content to blogPostsContent
        blogPostsContent += `
        <a class="post-link" href="${postLink}">
            <div class="post">
                <div class="post-image" style="background-image: url(${postImage})"></div>
                <div class="post-content">
                    <div class="post-date">${postDate}</div>
                    <div class="post-author">${blogPost.author}</div>
                    <div class="post-title"><h4>${blogPost.title}</h4></div>
                    <div class="post-text">${blogPost.content}</div>
                </div>
            </div>
        </a>
        `
    }
    // Update the html
    document.querySelector('.blog-posts').innerHTML = blogPostsContent;
}