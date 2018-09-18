import React from 'react';

const Genre = props => {

    return (
        <React.Fragment>
            <h5>Your Fav Genres</h5>
            <ol className="center-list">
                {props.favGenres.map(genre => <li key={genre.genre}><span className="bold-text">{genre.genre}</span> ({genre.count})</li>)}
            </ol>
        </React.Fragment>
    );

};

export default Genre;
