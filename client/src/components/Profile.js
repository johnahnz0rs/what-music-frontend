import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // stuffs
            user: this.props.user
        };
        // declare functions here
        this.getTopGenres = this.getTopGenres.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            console.log('*** componentDidUpdate ***');
            this.setState({user: this.props.user});
        }
    }

    componentDidMount() {
        // this.fetch;
        console.log('*** this.state.user ***', this.state.user);
        // if (!this.state.user.id) {
        //     window.location('/');
        // }

        // const's
        const searchParams = new URLSearchParams(window.location.search);
        const accessToken = searchParams.get('access_token');
        const getConfig = {
            method: 'GET',
            headers: {Authorization: `Bearer ${accessToken}`}
        };
        const spotifyAPI = "https://api.spotify.com/v1";

        let user = {};


        // SPOTIFY
        // Users Profile /v1/me
            // Top Artists /v1/me/top/artists
            // getTopGenres(topArtists)
                // Top Tracks /v1/me/top/tracks

        // get Users Profile
        // @RETURNS { id, display_name, email, external_urls.spotify, followers.total, images[0].url, country, product: 'membership type', type: 'model(?) type', href: 'api endpoint for this user', uri }
        fetch(`${spotifyAPI}/me`, getConfig)
            .then(res => res.json())
            .then(data => {
                user = {
                    id: data.id,
                    name: data.display_name,
                    email: data.email,
                    url: data.external_urls.spotify,
                    followers: data.followers.total,
                    country: data.country,
                    product: data.product,
                    type: data.type,
                    uri: data.uri
                };
                if (data.images[0].url) { user.image = data.images[0].url }
            })
            .then(() => {
                // get Top Artists
                // @PARAMS limit=(1-50), offset=(0), time_range={ short_term: '4 weeks', medium_term: '6 months', long_term: 'several years & future' }
                // @RETURNS { ... , items: [
                //      { id, name, images[0].url, external_urls.spotify, followers.total, genres: ['', ''], href: 'api endpoint for full artist details', popularity, type, uri },
                //      { ... }, ... ]}
                fetch(`${spotifyAPI}/me/top/artists?limit=50&time_range=short_term`, getConfig)
                    .then(res => res.json())
                    .then(topArtists => {
                        // console.log(topArtists);
                        // add topArtists list to user object
                        let userTopArtists = [];
                        for (let i of topArtists.items) {
                            // console.log('*** each i of topArtists.items ***', i);
                            const artist = {
                                id: i.id,
                                name: i.name,
                                image: i.images[0].url,
                                external_urls: i.href,
                                followers: i.followers.total,
                                genres: i.genres,
                                href: i.href,
                                popularity: i.popularity,
                                type: i.type,
                                uri: i.uri
                            };
                            userTopArtists.push(artist);
                        }
                        user.topArtists = userTopArtists;
                        // also: derive topGenres
                        user.topGenres = this.getTopGenres(userTopArtists); // return an array
                    })
                    .then(() => {
                        // get Top Tracks
                        // @PARAMS limit=(1-50), offset=(0), time_range={ short_term: '4 weeks', medium_term: '6 months', long_term: 'several years & future' }
                        // @RETURNS { ... , items = [
                        //  { id, name, artists: array of artist objects, album, disc_number, duration_ms, explicit, external_ids, external_urls.spotify, href: 'api endpoint for full track details', popularity, preview_url, available_markets, is_playable,  },
                        //  { ... }, ... ]
                        fetch(`${spotifyAPI}/me/top/tracks?limit=50&time_range=short_term`, getConfig)
                            .then(res => res.json())
                            .then(topTracks => {
                                // update user variable
                                let userTopTracks = [];
                                for (let i of topTracks.items) {
                                    // get abbreviated list of artists details
                                    let artistsList = [];
                                    for (let j of i.artists) {
                                        // name, id, href
                                        const oneArtist = {id: j.id, name: j.name, href: j.href};
                                        artistsList.push(oneArtist);
                                    }
                                    // collect track details
                                    const track = {
                                        name: i.name,
                                        artists: artistsList,
                                        preview_url: i.preview_url,
                                        album: i.album.name,
                                        image: i.album.images[0].url,
                                        release_date: i.album.release_date,
                                        disc_number: i.disc_number,
                                        track_number: i.track_number,
                                        explicit: i.explicit,
                                        is_playable: i.is_playable,
                                        popularity: i.popularity,
                                        type: i.type,
                                        duration: i.duration,
                                        href: i.href
                                    };
                                    userTopTracks.push(track);
                                }
                                // add top tracks to user object
                                user.topTracks = userTopTracks;
                                console.log('*** user after api calls ***', user);
                            })
                            .then(() => {
                                // pass up to parent/ContentArea
                                this.props.updateStateUser(user);
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
            })
            // .then(() => {
            //     // dbase - check if user exist
            //     fetch(`/api/user/${data.email}`)
            //         .then(res => res.json())
            //         .then(user => {
            //             if (user) {
            //                 // if user, then update
            //                 // console.log('*** this user exists ***');
            //             } else if (!user) {
            //                 // if no user, then create
            //             }
            //         })
            //         .catch(err => console.log(err));
            // })
            .catch(err => console.log(err));
    }


    getTopGenres = (artistsList) => {
        let genres = [];
        // tally the genres
        for (let i of artistsList) {
            for (let j of i.genres) {
                if (!genres.some((one) => one.genre === j)) { // if genre doesn't exist in genres<Array>
                    // then add that genre
                    genres.push({genre: j, count: 1});
                } else { // if genre already exists in genres<Array>
                    // then update that genre.count
                    const genreIndex = genres.findIndex(obj => obj.genre === j);
                    genres[genreIndex].count += 1;
                }
            }

        }
        // return genres sorted by count/tally
        // return genres.sort(this.dynamicSort('count'));
        return genres.sort((a,b) => b.count - a.count);
    };


    render() {
        return(
          <React.Fragment>
              <div className="">
                  <p>this is ur profile. display data-vis of ur music here</p>
                  <button onClick={() => console.log('*** Profile.state***', this.state)}>print Profile.state</button>


              </div>
          </React.Fragment>
        );
    }

}

export default Profile;