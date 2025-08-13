class Comment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const postId = `post_${Date.now()}`;
        const newPost = new Post(postId, this.id, content);
        this.posts.push(newPost);
    }
    comment(post, commentContent) {
        const commentId = `cmt_${Date.now()}`;
        const newComment = new Comment(commentId, this.id, commentContent);
        post.addComment(newComment);
    }
    follow(user) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }
    likePost(post) {
        post.addLike(this.id);
    }
    viewFeed() {
        console.log(`📢 Feed của người dùng ${this.id}:`);
        this.followers.forEach((user) => {
            user.posts.forEach((post) => {
                console.log(`- ${post.content} (by ${user.id})`);
            });
        });
    }
}
