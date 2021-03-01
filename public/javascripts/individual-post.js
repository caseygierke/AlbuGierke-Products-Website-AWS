
// const API_URL = "http://localhost:3000/dlog/api/posts/";
// const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = "http://ec2-34-214-201-195.us-west-2.compute.amazonaws.com:3000"
const API_URL = `${API_BASE_URL}/dlog/api/posts`;

// Define initial actions
window.onload = () => {
    getPost();
    getPostIdParam();
}

// Get post ID information from window
getPostIdParam = () => {
    // Get search query from url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
}

// Get the post from the API
const getPost = () => {
    // Call getPostIdParam function
    const postId = getPostIdParam();
    // Build url from postId
    const url = `${API_URL}/${postId}`;
    // Send GET request to API
    fetch(url, {
        method: "GET"
    }).then((response) => {
        // Return the response as json data
        return response.json();
    })
    .then((data) => {
        // Call the buildPost function
        buildPost(data);
    })
}

// Build the posts html from the API data returned
const buildPost = (data) => {
    // Get the date and convert to string
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    // Get the image
    const postImage = `${API_BASE_URL}${data.post_image}`;
    
    // Update the html with the API data
    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
    document.getElementById("individual-post-title").innerText = data.title;
    document.getElementById("individual-post-author").innerText = data.author;
    document.getElementById("individual-post-date").innerText = postDate;
    document.getElementById("individual-post-content").innerText = data.content;
}
