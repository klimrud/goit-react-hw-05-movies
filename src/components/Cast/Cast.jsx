import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/';
const LOGO_SIZE = 'w154';
const defaultImage = 'https://via.placeholder.com/154x231';

const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    const getTrending = () => {
      return (
        fetch(
          `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          .then(res => setCasts(res.cast))
          .catch(error => console.log('error', error))
      );
    };

    getTrending();
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
