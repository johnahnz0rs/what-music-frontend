import React from 'react';


class Friends extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return(<React.Fragment>
            <div className="" style={{}}>

                <h3>i am Friends.js; </h3>

                <p className="p-3 m-1" style={{border: '1px solid black'}}>search bar - search allUsers in dbase by name</p>

                <p className="p-3 m-1" style={{border: '1px solid black'}}>see search results</p>
            </div>
        </React.Fragment>);
    }

}


export default Friends;