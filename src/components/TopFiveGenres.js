import React from 'react';

const TopFiveGenres = props => {

    const genres = props.favGenres;
    return (
        <React.Fragment>
            <li key={genres[0].genre}><span className="bold-text">{genres[0].genre}</span> ({genres[0].count})</li>
            <li key={genres[1].genre}><span className="bold-text">{genres[1].genre}</span> ({genres[1].count})</li>
            <li key={genres[2].genre}><span className="bold-text">{genres[2].genre}</span> ({genres[2].count})</li>
            <li key={genres[3].genre}><span className="bold-text">{genres[3].genre}</span> ({genres[3].count})</li>
            <li key={genres[4].genre}><span className="bold-text">{genres[4].genre}</span> ({genres[4].count})</li>
        </React.Fragment>
    );

};

export default TopFiveGenres;
