import React from "react";

const RegisterPage = () => {
    return (
        <form>
            <h1>Register with us!</h1>
            <div className="is-flex is-justify-content-space-between">
                <div className="field">
                    <label className="label">First Name <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input className="input" type="text" name="firstName" id="firstName" placeholder="First Name" required />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Last Name <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input className="input" type="text" name="lastName" id="lastName" placeholder="Last Name" required />
                    </div>
                </div>
            </div>

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

            <div className="field">
                <label className="label">Confirm Password <span className="has-text-danger">*</span></label>
                <div className="control">
                    <input className="input" type="password" name="passwordConf" id="passwordConf" placeholder="Confirm Password" required />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Register</button>
                </div>
            </div>
        </form>
    );
}

export default RegisterPage