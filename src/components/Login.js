import React from 'react';

const Login = props => {

    const backendURL = 'https://what-music-backend.herokuapp.com';

    return (

        <React.Fragment>
            <div className="container login-comp-background">
                <div className="row center-align login-text">
                    <p className="col offset-s6 bold-text">
                        <span className="underline-text">Exploring music</span>
                        <br /><span className="underline-text">together</span> is a great way to get to know your new friend(s).
                        <p>But very often,
                        {/* <br/> it's too difficult to describe our music tastes clearly. */}
                            <br />it's hard to list what music we listen to.
                        </p>
                    </p>
                    <p className="col s8 left-align">
                        @<span className="bold-text underline-text">whatMusic</span> <span className="italic-text">we got your back, bro!</span>
                        <br />We SHOW YOU what music yous both like, so you can git busy.
                    </p>
                    <p className="col s12 left-align">#havefun #besafe #onelove</p>
                </div>
                <div className="row">
                    <div className="center-align">
                        <button
                            className="btn waves-effect waves-light btn-login"
                            type="submit"
                            name="action"
                            onClick={() => {
                                console.log(`backendURL: ${backendURL}`);
                                (window.location = `${backendURL}/login`)
                                }
                            }
                        >
                            Sign in with Spotify
                            <i className="material-icons right">send</i>
                        </button>
                        <span className="blue-text bold-text">*Best viewed on a smartphone*</span>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );

};

export default Login;
