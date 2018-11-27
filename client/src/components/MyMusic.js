import React from 'react';
import ListOfSpotifyApiCalls from "./ListOfSpotifyApiCalls";


class MyMusic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nicoleSpotifyID: '1215746208',
            playlistID: '37i9dQZF1DX76Wlfdnj7AP',

        };
        // declare methods here;

    }

    componentDidMount() {
        const searchParams = new URLSearchParams(window.location.search);
        const accessToken = searchParams.get('access_token');
        const getConfig = {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` }
        };

        // @DESC get my profile
        // @ROUTE GET /v1/me
        fetch('https://api.spotify.com/v1/me', getConfig)
            .then(res => res.json())
            .then(data => {
                console.log("*** spotify/v1/me ***", data);
            })
            .catch(err => console.log(err));





        // @DESC Get Current User's Top Artists
        // @ROUTE GET /v1/me/top/artists
        fetch('https://api.spotify.com/v1/me/top/artists?limit=50', getConfig)
            .then(res => res.json())
            .then(data => console.log('*** my top artists ***', data))
            .catch(err => console.log(err));






        // @DESC Get Current User's Top Tracks
        // @ROUTE GET /v1/me/top/tracks
        fetch('https://api.spotify.com/v1/me/top/tracks?limit=50', getConfig)
            .then(res => res.json())
            .then(data => console.log('*** my top tracks ***', data))
            .catch(err => console.log(err));




        // @DESC Get Current User's Recently Played Tracks
        // @ROUTE GET /v1/me/player/recently-played
        fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50', getConfig)
            .then(res => res.json())
            .then(data => console.log('*** my recently played ***', data))
            .catch(err => console.log(err));




        // @DESC Get a List of Current User's Playlists
        // @ROUTE GET /v1/me/playlists
        fetch('https://api.spotify.com/v1/me/playlists?limit=50', getConfig)
            .then(res => res.json())
            .then(data => console.log('*** my playlists ***', data))
            .catch(err => console.log(err));



        // @DESC Get User's Followed Artists
        // @ROUTE GET /v1/me/following?type=artist
        fetch('https://api.spotify.com/v1/me/following?type=artist&limit=50', getConfig)
            .then(res => res.json())
            .then(data => console.log('*** my followed artists ***', data))
            .catch(err => console.log(err));



        // @DESC Get Current User's Saved Albums
        // @ROUTE GET /v1/me/albums
        fetch('https://api.spotify.com/v1/me/albums?limit=50', getConfig)
            .then(res => res.json())
            .then(data => console.log('*** my saved albums ***', data))
            .catch(err => console.log(err));



        // @DESC Get Current User's Saved Tracks
        // @ROUTE GET /v1/me/tracks
        fetch('https://api.spotify.com/v1/me/tracks?limit=50', getConfig)
            .then(res => res.json())
            .then(data => console.log('*** my saved tracks ***', data))
            .catch(err => console.log(err));



        // @DESC Get a Playlist's Tracks
        // @ROUTE GET /v1/playlists/{playlist_id}/tracks
        fetch(`https://api.spotify.com/v1/playlists/${this.state.playlistID}/tracks?limit=100`, getConfig)
            .then(res => res.json())
            .then(data => console.log('*** a playlist\'s tracks, by playlist_id ***', data))
            .catch(err => console.log(err));


    }



    render() {
        return(<React.Fragment>
            <div className="container" style={{}}>


                <h3 className="text-center font-weight-bold">MyMusic.js</h3>


                <span className="font-weight-bold">spotify/v1/me</span>
                <ul>
                    <li>country</li>
                    <li>display_name</li>
                    <li>email</li>
                    <li>id (spotify_id)</li>
                </ul>


                <span className="font-weight-bold"></span>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>

            {/*<ListOfSpotifyApiCalls />*/}
        </React.Fragment>);
    }

}


export default MyMusic;