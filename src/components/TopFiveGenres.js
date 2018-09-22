import React from 'react';

const TopFiveGenres = props => {

    let genres = props.favGenres

    return (
        <React.Fragment>
            <li key={genres[0].id}>{genres[0].genre}</li>
            <li key={genres[1].id}>{genres[1].genre}</li>
            <li key={genres[2].id}>{genres[2].genre}</li>
            <li key={genres[3].id}>{genres[3].genre}</li>
            <li key={genres[4].id}>{genres[4].genre}</li>
        </React.Fragment>
    );

};

export default TopFiveGenres;
