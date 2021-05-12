const PATH = "./data.json";
const fs = require('fs');

class Post
{
    get() {
        // get posts
        return this.readData();
    }

    getSingleBlog() {
        // get one post

    }

    add(newPost) {
        // add new post
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        // import data.json function then export it to be used
        let data = fs.readFileSync(PATH);
        let posts = JSON.parse(data);
        return posts;
    }

    storeData(rawData) {
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post