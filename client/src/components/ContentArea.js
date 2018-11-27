import React from 'react';
import { Route } from 'react-router-dom';

import UserPage from './UserPage';
import Login from './Login';
import ListOfSpotifyApiCalls from './ListOfSpotifyApiCalls';


class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here
    }

    componentDidMount() {
    }

    render() {

        return (
            <React.Fragment>
                <div className="root-div">
                    <div className="my-background">

                        {/*<button className="btn btn-sm btn-outline-danger" onClick={() => console.log('*** print ContentArea.state ***', this.state)}>print ContentArea.state</button>*/}

                        <Route exact path="/" component={Login} />
                        <Route path="/user" component={UserPage} />
                        {/*<Route path="/allcalls" component={ListOfSpotifyApiCalls} />*/}

                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default ContentArea;
