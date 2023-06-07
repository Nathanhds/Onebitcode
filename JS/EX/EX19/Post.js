const Comment = require("./Comment")

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
    }

    addComment(username, content) {
        const comment = new Comment(username, content)
        this.comments.push(comment)
    }
}

module.exports = Post