import React from 'react';
import TopFiveArtists from './TopFiveArtists';
import TopFiveGenres from './TopFiveGenres';
import AllFavArtists from "./AllFavArtists";
import AllFavGenres from "./AllFavGenres";

class Profile extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            showAllFavArtists: false,
            showAllFavGenres: false
        }
        // this.printState = this.printState.bind(this);
        this.showAllFavArtists = this.showAllFavArtists.bind(this);
        this.showAllFavGenres = this.showAllFavGenres.bind(this);
    }

    componentDidMount() {
        // console.log('*** param id ***', this.state.param_id);
        // console.log('*** profile.js state.user ***', this.state.user);
        this.setState({user: this.props.user});
    }

    showAllFavArtists() {
        this.setState({ showAllFavArtists: true });
    }

    showAllFavGenres() {
        this.setState({ showAllFavGenres: true });
    }

    // printState() {
    //     console.log('*** profile.js state.user ***', this.state.user);
    // }

    render() {
        return (
            <React.Fragment>
                {/*<button onClick={this.printState}>print state</button>*/}

                <div className="show-fav-artists center-align">
                    <h4>Your Top 5 Artists</h4>
                    <a onClick={this.showAllFavArtists}>Show All Fav Artists</a>

                    <ol className="fav-artist-genre-list">
                        {!this.state.showAllFavArtists && this.state.user.spotify && <TopFiveArtists favArtists={this.state.user.spotify.favArtists} />}
                    </ol>

                    {this.state.showAllFavArtists && <ol className="fav-artist-genre-list"><AllFavArtists favArtists={this.state.user.spotify.favArtists} /></ol>}
                </div>

                <div className="show-fav-genres center-align">
                    <h4>Your Top 5 Genres</h4>
                    <a onClick={this.showAllFavGenres}>Show All Fav Genres</a>

                    <ol className="fav-artist-genre-list">
                        {!this.state.showAllFavGenres && this.state.user.spotify && <TopFiveGenres favGenres={this.state.user.spotify.favGenres} />}
                    </ol>

                    {this.state.showAllFavGenres && <ol className="fav-artist-genre-list"><AllFavGenres favGenres={this.state.user.spotify.favGenres} /></ol>}
                </div>

            </React.Fragment>
        );
    }
}

export default Profile;
