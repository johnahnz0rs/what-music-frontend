import React from 'react';

const Navbar = props => {

    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper center-align">
                    <a role="button" className="brand-logo">
                        whatMusic
                    </a>
                    <button data-target="mobile-menu" className="sidenav-trigger btn-flat">
                        <i className="material-icons">menu</i>
                    </button>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <button>My Profile</button>
                        </li>
                        <li>
                            <button>Compare Music</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-menu">
                <li>
                    <button>My Profile</button>
                </li>
                <li>
                    <button>Compare Music</button>
                </li>
            </ul>
        </React.Fragment>
    );

};

export default Navbar;
