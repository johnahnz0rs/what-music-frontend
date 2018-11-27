import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.showThisPage = this.showThisPage.bind(this);
    }

    componentDidMount() { }

    showThisPage = (e) => {
        const page = e.target.name;
        this.props.showThisPage(page);

    };



    render() {

        const pageButtons = {
            whiteSpace: 'normal',
            fontWeight: 'bold',
            width: '150px',
            height: '200px',
            fontSize: 'xx-large',
            WebkitTextStroke: '1px teal',
            color: 'white',
            border: '5px solid teal',
        };
        const testing = {
            WebkitTextStroke: '5px purple',
        };

        return (<React.Fragment>
            <div>

                <h1 className="text-center font-weight-bold">Welcome</h1>

                <div className="container-fluid text-center mt-3" style={{}}>
                    <div className="">
                        <button name="mymusic" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={this.showThisPage}>My Music</button>
                        <button name="friends" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={this.showThisPage}>Search for Friends</button>
                    </div>
                    <div className="">
                        <button name="nearby" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={this.showThisPage}>Find Nearby</button>
                        <button name="rando" className="btn btn-lg btn-outline-success m-3" style={pageButtons} onClick={this.showThisPage}>Meet a Rando</button>
                    </div>
                </div>

            </div>
        </React.Fragment>);
    }

}

export default Home;