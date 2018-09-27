import React from 'react';
import Profile from './Profile';
import FindCommon from './FindCommon';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            showProfile: true,
            showFindCommon: false,
            // backendURL: 'https://what-music-backend.herokuapp.com',
            backendURL: 'http://localhost:8000',
            showAllFavArtists: false,
            showAllFavGenres: false
        };
        this.goToProfile = this.goToProfile.bind(this);
        this.goToFindCommon = this.goToFindCommon.bind(this);
        this.getMyTopGenres = this.getMyTopGenres.bind(this);
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
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
                console.log("*** spotify/v1/me ***", data);
                let user = {
                    email: data.email,
                    user: {
                      fname: data.display_name.split(' ')[0].toString(),
                      lname: data.display_name.split(' ')[data.display_name.split.length-1].toString(),
                      linitial: data.display_name.split(' ')[data.display_name.split.length-1][0].toString(),
                      email: data.email
                    },
                    spotify: {
                        id: data.id,
                        display_name: data.display_name,
                        email: data.email,
                        images: data.images,
                        spotify_url: data.external_urls.spotify,
                        favGenres: [],
                        favArtists: [],
                        birthdate: data.birthdate,
                        country: data.country,
                        followers: data.followers,
                        href: data.href
                    }
                };

                // get my topArtists;
                fetch('https://api.spotify.com/v1/me/top/artists?limit=50', getConfig)
                    .then(res => res.json())
                    .then(artists => {
                        // make a sorted list (by popularity) of favArtists;
                        user.favArtistsByGlobalPopularity = artists.items.sort((a,b) => {
                            return b.popularity - a.popularity;
                        });

                        user.spotify.favArtists = artists.items;

                        // make a sorted list (by count) of favGenres;
                        user.spotify.favGenres = this.getMyTopGenres(artists.items);
                        // update state.user;
                        console.log('*** this is the formatted user ***', user);
                        console.log('*** this is data from /dbase/v1/me ***', data);
                        this.setState({user});
                        // create postConfig and save user to dbase
                        const postConfig = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(this.state.user)
                        };
                        fetch(`${this.state.backendURL}/dbase/user`, postConfig)
                            // .then(msg => console.log('*** response ***', msg))
                            .then(() => console.log('*** lol ok ***'))
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
                {this.state.user.user &&
                <div className="row center-align">
                    <div className="col s3">
                        <img className="home-avatar" alt="" src={this.state.user.spotify.images[0].url} />
                        <span className="bold-text">{this.state.user.user.fname} {this.state.user.user.linitial}.</span>
                        <span>({this.state.user.spotify && <span>Spotify</span>}{this.state.user.soundcloud && <span>, SoundCloud</span>}{this.state.user.apple && <span>, Apple Music</span>})</span>
                    </div>
                    <div className="col s5">
                        {this.state.showProfile && this.state.user.spotify && <h4>My Profile</h4>}
                        {this.state.showFindCommon && this.state.user.spotify && <h4>Compare w Friends</h4>}
                    </div>
                    <div className="col s4 center-align wrapper">
                        {this.state.showProfile && this.state.user.spotify && <button className="waves-effect waves-light btn-large compare-button valign-wrapper" onClick={this.goToFindCommon}>Friends</button>}
                        {this.state.showFindCommon && this.state.user.spotify && <button className="waves-effect waves-light btn-large compare-button valign-wrapper" onClick={this.goToProfile}>Me</button>}
                    </div>
                </div>}

                <div className="row display-profile-or-find-common">
                    {this.state.showProfile && this.state.user.spotify && <Profile user={this.state.user} />}
                    {this.state.showFindCommon && this.state.user.spotify && <FindCommon user={this.state.user} />}
                </div>

            </React.Fragment>
        );
    }
}

export default User;
