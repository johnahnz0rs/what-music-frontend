import React from 'react';
import { Route } from 'react-router-dom';
import User from './User';
// import Profile from './Profile';
import Login from './Login';
import Navbar from './Navbar';



const ContentArea = props => {

    return (
        <React.Fragment>
            <div className="root-div">
                <Navbar />
                <Route exact path="/" component={Login} />
                <Route path="/user" component={User} />
                {/*<Route path="/profile/:id" component={Profile} />*/}
            </div>
        </React.Fragment>
    );

};

export default ContentArea;
