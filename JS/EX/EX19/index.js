const Author = require("./Author")

const nathan = new Author("Nathan")

const post = nathan.writePost("Título", "lorem ipsum dolor")
post.addComment("Cacau", "Post incrível")

console.log(post)
console.log(nathan)

