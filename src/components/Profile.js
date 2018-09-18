import React from 'react';
import Artist from './Artist';
import Genre from './Genre';

class Profile extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            user: props.profile,
            showTopArtists: false,
            showTopGenres: false
        }
        this.showArtists = this.showArtists.bind(this);
        this.showGenres = this.showGenres.bind(this);
        this.printState = this.printState.bind(this);
    }


    showArtists() {
        this.setState({showTopArtists: true});
        this.setState({showTopGenres: false});
    }

    showGenres() {
        this.setState({showTopGenres: true});
        this.setState({showTopArtists: false});
    }

    printState() {
        console.log('*** Profile.printState ***', this.state);
    }


    render() {
        return (
            <React.Fragment>
                <div className="row center-align">
                    <h4 className="underline-text">Your Profile</h4>
                </div>
                <div className="row center-align">
                    <div className="col s4 center-align">
                        <button className="waves-effect waves-dark btn btn-artist-genre-song center-align" onClick={this.showArtists}>Fav Artists</button>
                    </div>
                    <div className="col s4 center-align">
                        <button className="waves-effect waves-dark btn btn-artist-genre-song" onClick={this.showGenres}>Fav Genres</button>
                    </div>
                    <div className="col s4 center-align">
                        <button className="waves-effect waves-dark btn btn-artist-genre-song disabled" onClick={this.showSongs}>Fav Tracks</button>
                    </div>
                </div>



                <div className="row div-artist-genre-song center-align">
                    {this.state.showTopArtists && <Artist favArtists={this.state.user.favArtists} />}
                    {this.state.showTopGenres && <Genre favGenres={this.state.user.favGenres} />}
                </div>
            </React.Fragment>
        );
    }
}

export default Profile;
