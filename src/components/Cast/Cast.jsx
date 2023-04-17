import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { movieId } = useParams();
  console.log('params', movieId);

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
          // .then((res) =>console.log('cast', res.cast))
          .then(res => setCasts(res.cast))
          .catch(error => console.log('error', error))
      );
    };

    getTrending();
  }, [movieId]);

  console.log('casts', casts);

  return (
    // <div>Cast</div>
    <div className="card">
      <ul>
        {casts.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={profile_path} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5>Name:{name}</h5>
              <h5>Characters: </h5>
              <p className="card-text">{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    // </div>
  );
};

export default Cast;
