import React from 'react';

const AllFavGenres = props => {

    return (
        <React.Fragment>
            {props.favGenres.map(genre => <li key={genre.genre}><span className="bold-text">{genre.genre}</span> ({genre.count})</li>)}
        </React.Fragment>
    );

};

export default AllFavGenres;
