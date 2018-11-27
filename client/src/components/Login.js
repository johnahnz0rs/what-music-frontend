import React from 'react';


const backendURI = 'http://localhost:5000';
// const backendURI = process.env.BACKEND_URI; /* this one doesn't work: process.env... resolves to undefined */
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
        // declare methods here
        this.signInWithSpotify = this.signInWithSpotify.bind(this);
    }

    componentDidMount() {

    }




    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            this.setState({user: this.props.user});
        }
    }

    signInWithSpotify = () => {
        fetch('/api/login-spotify')
            .then(res => res.json())
            .then(() => this.props.pickPage('profile'));
    };

    render() {

        // const spotifyLoginURL = 'http://localhost:5000/api/login-spotify';
        const spotifyLoginURL = `${backendURI}/api/login-spotify`;

        return(
            <React.Fragment>
                <div className="container">
                    {/*<p>lol this is login</p>*/}
                    {/*<button className="btn btn-sm btn-outline-primary" onClick={() => console.log('*** print Login.state ***', this.state)}>print Login.state</button>*/}

                    <h5 className="propaganda-text-stroke mb-5 ml-auto text-center" style={{width: '50%'}}>Musical compatibility is important to many people. And that makes sense - music is really intimate; it's emotional.</h5>


                    <h4 className="propaganda-text-stroke-black mb-2 mx-auto text-center" style={{width: '50%'}}>Find your<br/> music soulmate.</h4>
                    <div className="text-center">
                        <a href={spotifyLoginURL} style={{}}><button className="btn btn-sm btn-outline-primary" style={{borderWidth: '2px'}}><span className="font-weight-bold"><u>Sign in with Spotify</u></span></button></a>
                    </div>

                </div>

            </React.Fragment>
        );
    }

}

export default Login;