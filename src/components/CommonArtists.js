import React from 'react';

const CommonArtists = props => {

    return (
        <React.Fragment>
            {props.commonArtits && props.commonArtists.map(artist => <li key={artist.id}>{artist.name}</li>)}
        </React.Fragment>
    );

};

export default CommonArtists;
