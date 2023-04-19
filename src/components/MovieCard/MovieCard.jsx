import React from 'react'
import PropTypes from 'prop-types';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const LOGO_SIZE = 'w500';
const defaultImage = 'https://via.placeholder.com/348x522?text=no+photo';

 const MovieCard = ({ title, runtime, overview, genres, poster_path }) => {
  return (<>
      {title && (
        <div
          className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  poster_path
                    ? BASE_IMG_URL + LOGO_SIZE + poster_path
                    : defaultImage
                }
                className="img-fluid rounded-start"
                alt={title}
                width="500"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name: {title}</h5>
                <h5 className="card-title">User Score:</h5>
                <p className="card-text">{runtime}%</p>

                <h5 className="card-title">Overview: </h5>
                <p className="card-text">{overview}</p>
                <h5 className="card-title">Genres: </h5>

                <p className="card-text">
                  {genres.map(genre => genre.name).join(' ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

MovieCard.propType = {
  title: PropTypes.string,
  runtime: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
}

export default MovieCard;
