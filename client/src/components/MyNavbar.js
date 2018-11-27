import React from 'react';

const MyNavbar = (props) => {

    return (
        <React.Fragment>

            <nav className="navbar navbar-expand-sm navbar-dark container-fluid fixed-top" style={{backgroundColor: '#F36D76'}}>

                {/* brand-home */}
                <a className="navbar-brand px-3" href="#" onClick={() => { props.showThisPage('home') }}>
                    <span className="navbar-brand font-weight-bold" style={{fontSize: 'x-large'}}>whatMusic </span>
                </a>
                {/* toggler-icon */}
                <button className="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*navbar = myMusic / friends / nearby / rando */}
                <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center font-weight-bold">
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#" style={{color: 'white'}} onClick={() => { props.showThisPage('mymusic') }}>My Music</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#" style={{color: 'white'}} onClick={() => { props.showThisPage('friends') }}>Search Friends</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#" style={{color: 'white'}} onClick={() => { props.showThisPage('nearby') }}>Find Nearby</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#" style={{color: 'white'}} onClick={() => { props.showThisPage('rando') }}>Meet Rando</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </React.Fragment>
    );

};

export default MyNavbar;