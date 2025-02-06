import React from "react";
import { useParams } from "react-router-dom";

const PostPage = ( {posts} ) => {

    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <p>Post not found</p>;
    }
    
    return (
        <>
            <h1 className="title">{post.title}</h1>
            <p className="subtitle is-6">Written by {post.author}</p>
            <p>
                Date: <time datetime={post.date}>{post.date}</time>
            </p>
            <div className="content">
                {post.content}
            </div>

            <div className="is-flex is-justify-content-space-around">
                <button className="button is-success">Like 👍</button>
                <button className="button is-danger">Dislike 👎</button>
            </div>
        </>
    );
}

export default PostPage