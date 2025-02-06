import React from "react";
import { useNavigate } from "react-router-dom";

const PostSnippet = ( {post} ) => {

    const navigate = useNavigate();

    return (
        <div class="card" onClick={() => navigate("/post/" + post.id)}>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{post.title}</p>
                            <p class="subtitle is-6">Written by {post.author}</p>
                            <p>
                                Date: <time datetime={post.date}>{post.date}</time>
                            </p>
                        </div>
                    </div>

                    <div class="content snippet">
                        {post.content}
                    </div>
                </div>
        </div>

    );
}

export default PostSnippet