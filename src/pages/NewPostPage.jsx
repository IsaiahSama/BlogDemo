import React from "react";

const NewPostPage = () => {
    return (
        <form>
            <h1>Create new post</h1>
            <div class="field">
                <label class="label">Post Title</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Title for Post" />
                </div>
            </div>

            <div class="field">
                <label class="label">Post Content</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Type your content here" rows="15" />
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default NewPostPage