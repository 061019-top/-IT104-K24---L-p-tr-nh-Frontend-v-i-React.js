class Comment {
  public id: string;
  public userId: string;
  public content: string;
  public replies: Comment[];

  constructor(id: string, userId: string, content: string) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.replies = [];
  }

  public addReply(reply: Comment): void {
    this.replies.push(reply);
  }
}

class Post {
  public id: string;
  public userId: string;
  public content: string;
  public likes: string[];
  public comments: Comment[];

  constructor(id: string, userId: string, content: string) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  public addLike(userId: string): void {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
    }
  }

  public addComment(comment: Comment): void {
    this.comments.push(comment);
  }
}

class User {
  public id: string;
  public posts: Post[];
  public followers: User[];

  constructor(id: string) {
    this.id = id;
    this.posts = [];
    this.followers = [];
  }

  public createPost(content: string): void {
    const postId = `post_${Date.now()}`;
    const newPost = new Post(postId, this.id, content);
    this.posts.push(newPost);
  }

  public comment(post: Post, commentContent: string): void {
    const commentId = `cmt_${Date.now()}`;
    const newComment = new Comment(commentId, this.id, commentContent);
    post.addComment(newComment);
  }

  public follow(user: User): void {
    if (!this.followers.includes(user)) {
      this.followers.push(user);
    }
  }

  public likePost(post: Post): void {
    post.addLike(this.id);
  }

  public viewFeed(): void {
    console.log(` Feed của người dùng ${this.id}:`);
    this.followers.forEach((user) => {
      user.posts.forEach((post) => {
        console.log(`- ${post.content} (by ${user.id})`);
      });
    });
  }
}