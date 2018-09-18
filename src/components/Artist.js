import React from 'react';

const Artist = props => {

    return (
        <React.Fragment>
            {props.favArtists.map(artist => <li key={artist.id}>{artist.name}</li>)}
        </React.Fragment>
    );

};

export default Artist;
