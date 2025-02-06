import React from "react";

const PostSnippet = () => {
    return (
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">Why CSS Is Awesome</p>
                        <p class="subtitle is-6">Written by Jeffery</p>
                        <p>
                            Date: <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </p>
                    </div>
                </div>

                <div class="content snippet">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aliquam in inventore impedit, fugit non quas architecto iusto. Fugit corrupti temporibus provident itaque ullam quaerat, obcaecati consectetur odio laborum nostrum!
                </div>
            </div>
        </div>
    );
}

export default PostSnippet