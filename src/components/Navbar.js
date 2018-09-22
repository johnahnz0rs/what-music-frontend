import React from 'react';

const Navbar = props => {

    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <a role="button" className="brand-logo">
                        whatMusic
                    </a>
                    <button data-target="mobile-menu" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </button>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="#">My Profile</a>
                        </li>
                        <li>
                            <a href="#">Compare Music</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-menu">
                <li>
                    <a href="#">My Profile</a>
                </li>
                <li>
                    <a href="#">Compare Music</a>
                </li>
            </ul>
        </React.Fragment>
    );

};

export default Navbar;
