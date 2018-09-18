import React from 'react';
import Profile from './Profile';
import FindCommon from './FindCommon';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            showProfile: false,
            showFindCommon: false,
            backendURL: 'https://what-music-backend.herokuapp.com'
        };
        this.goToProfile = this.goToProfile.bind(this);
        this.goToFindCommon = this.goToFindCommon.bind(this);
        this.getMyTopGenres = this.getMyTopGenres.bind(this);
    }

    componentDidMount() {
        const searchParams = new URLSearchParams(window.location.search);
        const accessToken = searchParams.get('access_token');

        // create getConfig and get my user info;
        const getConfig = {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        fetch('https://api.spotify.com/v1/me', getConfig)
            .then(res => res.json())
            .then(data => {
                const user = {
                    spotifyID: data.id,
                    display_name: data.display_name,
                    email: data.email,
                    image: data.image,
                    spotify_url: data.external_urls.spotify,
                    favGenres: [],
                    favArtists: []
                };

                // get my topArtists;
                fetch('https://api.spotify.com/v1/me/top/artists?limit=50', getConfig)
                    .then(res => res.json())
                    .then(artists => {
                        // make a sorted list (by popularity) of favArtists;
                        user.favArtists = artists.items.sort((a,b) => {
                            return b.popularity - a.popularity;
                        });
                        // make a sorted list (by count) of favGenres;
                        user.favGenres = this.getMyTopGenres(artists.items);
                        // update state.user;
                        console.log('*** this is the formatted user ***', user);
                        this.setState({user});
                        // create postConfig and save user to dbase
                        const putConfig = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(user)
                        };
                        fetch(`${this.state.backendURL}/api/user`, putConfig)
                            .then(() => console.log('*** save to dbase successful! ***'))
                            .catch(err => console.log(err));
                    });
            });
    }

    goToProfile() {
        this.setState({ showProfile: true });
        this.setState({ showFindCommon: false });
    }

    goToFindCommon() {
        this.setState({ showFindCommon: true });
        this.setState({ showProfile: false });
    }

    getMyTopGenres(artists) {
        let genres = {};
        let genresArray = [];
        // make an object of objects {genre:count};
        for (let artist of artists) {
            if (artist.genres.length > 0) {
                for (let genre of artist.genres) {
                    (!Object.keys(genres).includes(genre)) ? genres[genre] = 1 : genres[genre]+= 1;
                }
            }
        }
        // iterate through genres object, push new object {genre: genre, count: count} to genresArray;
        for (let i of Object.keys(genres)) {
            genresArray.push({genre: i, count: genres[i]})
        }
        // then sort genresArray;
        genresArray = genresArray.sort((a, b) => { return b.count - a.count });
        // console.log('*** this is getMyTopGenres printing genresArray(sorted) ***', genresArray);
        return genresArray;
    }

    render() {
        return (
            <React.Fragment>
                <div className="row center-align">
                    <h3 className="greeting-header">Hi, {this.state.user.display_name}</h3>
                </div>

                <div className="row center-align">
                    <div className="col s6">
                        <button className="waves-effect waves-dark btn btn-prof-find-common" onClick={this.goToProfile}><i className="material-icons left">cloud</i>My Profile</button>
                    </div>
                    <div className="col s6 center-align">
                        <button className="waves-effect waves-dark btn btn-prof-find-common" onClick={this.goToFindCommon}><i className="material-icons left">send</i>compare music with a friend</button>
                    </div>
                </div>

                <div className="row displayProfileOrMatch">
                    {this.state.showProfile && this.state.user && <Profile profile={this.state.user} />}
                    {this.state.showFindCommon && this.state.user.favArtists && <FindCommon user={this.state.user} />}
                </div>

            </React.Fragment>
        );
    }
}

export default User;
