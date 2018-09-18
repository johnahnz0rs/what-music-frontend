import React from 'react';

const Artist = props => {

    return (
        <React.Fragment>
            <h5>Your Fav Artists</h5>
            {props.favArtists.map(artist => <li key={artist.id}>{artist.name}</li>)}
        </React.Fragment>
    );

};

export default Artist;
