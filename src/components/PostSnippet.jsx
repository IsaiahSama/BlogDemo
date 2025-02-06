import React from "react";
import { useNavigate } from "react-router-dom";

const PostSnippet = ( {post} ) => {

    const navigate = useNavigate();

    return (
        <div className="card clickable" onClick={() => navigate("/post/" + post.id)}>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{post.title}</p>
                            <p className="subtitle is-6">Written by {post.author}</p>
                            <p>
                                Date: <time dateTime={post.date}>{post.date}</time>
                            </p>
                        </div>
                    </div>

                    <div className="content snippet">
                        {post.content}
                    </div>
                </div>
        </div>

    );
}

export default PostSnippet