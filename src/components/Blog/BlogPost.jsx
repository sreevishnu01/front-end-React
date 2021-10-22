



function BlogPost({ post }) {
    return (
        <div className="posts">
            <h1>{post.title}</h1>
            <h3>{new Date(post.updatedAt).toDateString()}</h3>
            <p>{post.description}</p>
        </div>
    );
}

export default BlogPost;