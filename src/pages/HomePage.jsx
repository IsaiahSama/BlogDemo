import React from "react";
import PostSnippet from "../components/PostSnippet";

const HomePage = ({posts}) => {
    return (
        <>
            <div className="is-flex is-justify-content-space-between">
                <h1>Latest Posts</h1>

                <div className="is-flex is-flex-direction-column">
                    <p>Welcome Jeffery</p>
                    <input type="text" name="search" id="search" placeholder="Search" className="input" />
                </div>
            </div>
            <div className="posts py-2">
                {posts.map(post => <PostSnippet key={post.id} post={post} />)}

            </div>
        </>
    );
}

export default HomePage