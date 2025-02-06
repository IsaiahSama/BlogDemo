import React from "react";

const RegisterPage = () => {
    return (
        <form>
            <h1>Register with us!</h1>
            <div className="is-flex is-justify-content-space-between">
                <div class="field">
                    <label class="label">First Name <span class="has-text-danger">*</span></label>
                    <div class="control">
                        <input class="input" type="text" name="firstName" id="firstName" placeholder="First Name" required />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Last Name <span class="has-text-danger">*</span></label>
                    <div class="control">
                        <input class="input" type="text" name="lastName" id="lastName" placeholder="Last Name" required />
                    </div>
                </div>
            </div>

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

            <div class="field">
                <label class="label">Confirm Password <span class="has-text-danger">*</span></label>
                <div class="control">
                    <input class="input" type="password" name="passwordConf" id="passwordConf" placeholder="Confirm Password" required />
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

export default RegisterPage