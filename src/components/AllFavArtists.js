import React from 'react';

const AllFavArtists = props => {

    return (
        <React.Fragment>
            {props.favArtists.map(artist => <li key={artist.id}>{artist.name}</li>)}
        </React.Fragment>
    );

};

export default AllFavArtists;
