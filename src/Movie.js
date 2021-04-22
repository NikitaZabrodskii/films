import React from 'react';
import PropTypes from 'prop-types';



function Movie ({id,  summary, poster, year,title}) {
    return <div>
        <h1>{title}</h1>
        <h2>{year}</h2>
        <h3>{summary}</h3>
        <h4>{id}</h4>
        <img src={poster}/>
    </div>
   

}

Movie.propTypes= {

    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
};

 


export default Movie;