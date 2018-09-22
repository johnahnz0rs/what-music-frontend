import React from 'react';

const TopFiveArtists = props => {

    const artists = props.favArtists;

    return (
        <React.Fragment>
            <li key={artists[0].id}>{artists[0].name}</li>
            <li key={artists[1].id}>{artists[1].name}</li>
            <li key={artists[2].id}>{artists[2].name}</li>
            <li key={artists[3].id}>{artists[3].name}</li>
            <li key={artists[4].id}>{artists[4].name}</li>
        </React.Fragment>
    );

};

export default TopFiveArtists;
