import React from 'react';

class Compare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
        // declare methods here

    }

    componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>

                <div className="row container">
                    <p>lol this is compare</p>
                    <button className="btn btn-sm btn-outline-success" onClick={() => console.log('*** print Compare.state ***' ,this.state)}>print Compare.state</button>
                </div>

            </React.Fragment>
        );
    }
}

export default Compare;