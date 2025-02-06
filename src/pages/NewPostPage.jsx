import React from "react";

const NewPostPage = () => {
    return (
        <form>
            <h1>Create new post</h1>
            <div className="field">
                <label className="label">Post Title</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Title for Post" />
                </div>
            </div>

            <div className="field">
                <label className="label">Post Content</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Type your content here" rows="15" />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default NewPostPage