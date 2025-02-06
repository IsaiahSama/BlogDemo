import React from "react";

const LoginPage = () => {
    return (
        <form>
            <h1>Welcome back!</h1>

            <div class="field">
                <label class="label">Email <span class="has-text-danger">*</span></label>
                <div class="control">
                    <input class="input" type="email" name="email" id="email" placeholder="Email" required />
                </div>
            </div>

            <div class="field">
                <label class="label">Password <span class="has-text-danger">*</span></label>
                <div class="control">
                    <input class="input" type="password" name="password" id="password" placeholder="Password" required />
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Login</button>
                </div>
            </div>
        </form>
    );
}

export default LoginPage