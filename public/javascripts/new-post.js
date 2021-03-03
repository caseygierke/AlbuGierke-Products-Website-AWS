
// const API_URL = "http://localhost:3000/dlog/api/posts/";
// const API_BASE_URL = "http://ec2-34-214-201-195.us-west-2.compute.amazonaws.com:3000"
const API_BASE_URL = "http://ec2-34-212-188-42.us-west-2.compute.amazonaws.com:3000"
const API_URL = `${API_BASE_URL}/dlog/api/posts`;

let data;

const submitNewPost = () => {
    // Get info from the form
    var input = document.getElementById("form-post-image");
    const author = document.getElementById("form-post-author").value;
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;
    
    // Check if image is blank
    if (input.files.length == 0) {
        alert('You need to upload an image');
        return '';
    }
   
    // Create an empty FormData object
    data = new FormData();
    // Add data to FormData object
    data.append("post-image", input.files[0]);
    data.append("author", author);
    data.append("title", title);
    data.append("content", content);

    // Send the data to the API endpoint
    fetch(API_URL, {
        method: "POST",
        body: data
    }).then(() => {
        // This part handles complications of simultaneously reading and writing to a .json file
        setTimeout(() => {
            window.location.href = "/dlog";
        }, 1000);
    })
    
}
