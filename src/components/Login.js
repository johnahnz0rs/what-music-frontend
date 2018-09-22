import React from 'react';

const Login = props => {

    const backendURL = 'https://what-music-backend.herokuapp.com';
    // const backendURL = 'http://localhost:8000';


    return (

        <React.Fragment>
            <div className="container login-comp-background">
                <div className="row center-align login-text">
                    <div className="col offset-s6 bold-text">
                        <span className="underline-text">Exploring music
                        <br />together</span> is a great way to get to know your new friend(s).
                        <br />But sometimes,
                        <br />it's hard to list what music we listen to.
                    </div>
                    <div className="col s12 left-align">
                        <span className="col s8">
                            @<span className="bold-text underline-text">whatMusic</span> <span className="italic-text">we got your back.</span>
                            <br />We show you what music yous both like, so you can get going!
                        </span>
                        <span className="col s12 splash-hashtags"> #besafe #havefun #onelove</span>
                    </div>
                </div>
                <div className="row">
                    <div className="center-align">
                        <button
                            id="login-button"
                            className="btn waves-effect waves-light btn-login"
                            type="submit"
                            name="action"
                            onClick={() =>
                                window.location = `${backendURL}/login`
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
