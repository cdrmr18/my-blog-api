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

    add() {
        // add new post
    }

    readData() {
        // import data.json function then export it to be used
        let data = fs.readFileSync(PATH);
        let posts = JSON.parse(data);
        return posts;
    }
}

module.exports = Post