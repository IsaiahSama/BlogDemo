import React from "react";

const LoginPage = () => {
    return (
        <form>
            <h1>Welcome back!</h1>

            <div className="field">
                <label className="label">Email <span className="has-text-danger">*</span></label>
                <div className="control">
                    <input className="input" type="email" name="email" id="email" placeholder="Email" required />
                </div>
            </div>

            <div className="field">
                <label className="label">Password <span className="has-text-danger">*</span></label>
                <div className="control">
                    <input className="input" type="password" name="password" id="password" placeholder="Password" required />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Login</button>
                </div>
            </div>
        </form>
    );
}

export default LoginPage