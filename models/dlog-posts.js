// Define path to data file
const PATH = "./dlog-data.json";
// Import fs
const fs = require('fs');

// Define Post class
class Post {
    
    // Define get method
    get() {
        // Get posts
        return this.readData();
    }

    // Define getIndividualBlog method
    getIndividualBlog(postId) {
        // Get all the posts
        const posts = this.readData();
        // Find the post with the correct ID
        const foundPost = posts.find((post) => post.id == postId);
        // Return it
        return foundPost;
    }

    // Define add method
    add(newPost) {
        // Get the posts currently in the DB
        const currentPosts = this.readData();
        // Add the newPost to the currentPosts
        currentPosts.unshift(newPost);
        // Rewrite the data to file
        this.storeData(currentPosts);
    }

    // Define the readData method
    readData() {
        // Get all the data from data file
        let rawdata = fs.readFileSync(PATH);
        // Convert to json
        let posts = JSON.parse(rawdata);
        return posts;
    }

    // Define storeData method
    storeData(rawData) {
        // Define data as a json version of the raw data
        let data = JSON.stringify(rawData);
        // Write it to the file
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;