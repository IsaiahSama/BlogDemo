import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/cssLogo.png" alt="CSS Logo" style={{ width: "50px", height: "50px" }} />
                    <p>CSS Blog</p>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu is-active">
                <div className="navbar-start">
                    <Link className="navbar-item" to={{
                        pathname: "/"
                    }}>
                        Home
                    </Link>

                    <Link className="navbar-item" to={{
                        pathname: "/post/create"
                    }}>
                        New Post
                    </Link>

                    <Link className="navbar-item" to={{
                        pathname: "/profile"
                    }}>
                        Profile
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="/register">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="/login">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;