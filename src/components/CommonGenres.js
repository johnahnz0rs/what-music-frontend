import React from 'react';

const CommonGenres = props => {

    return (
        <React.Fragment>
            {props.commonGenres && props.commonGenres.map(genre => <li key={genre.genre}>{genre}</li>)}
        </React.Fragment>
    );

};

export default CommonGenres;
