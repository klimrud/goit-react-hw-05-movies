import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/get-trending-api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const LOGO_SIZE = 'w154';
const defaultImage = 'https://via.placeholder.com/154x231';

const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(res => setCasts(res.cast))
      .catch(error => toast.error(`We don't have any cast for this movie.`));
  }, [movieId]);

  return (
    <div className="card ">
      <hr></hr>
      {casts.length > 0 && (
        <ul className="m-5">
          {casts.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? BASE_IMG_URL + LOGO_SIZE + profile_path
                    : defaultImage
                }
                className="card-img-top w-auto"
                alt={name}
                width="154"
              />
              <div className="card-body">
                <h5>{name}</h5>
                <h6>Characters: </h6>
                <p className="card-text">{character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!casts.length && (
        <p className="m-5">We don't have any cast for this movie.</p>
      )}
    </div>
  );
};

export default Cast;
