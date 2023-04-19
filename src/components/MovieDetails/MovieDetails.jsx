import React, { lazy, useEffect, useRef, useState } from 'react';

import { TiArrowBack } from 'react-icons/ti';

import { Link, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdditionalInfo = lazy(() =>
  import('components/AdditionalInfo/AdditionalInfo')
);

const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [results, setResults] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    const getTrending = () => {
      return fetch(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => setResults(res))
        .catch(error => toast.error(`${error.message}`));
    };

    getTrending();
  }, [movieId]);

  const { title, runtime, overview, genres, poster_path } = results;
  return (
    <>
      <Link
        className="btn btn-outline-secondary m-4"
        to={backLinkLocationRef.current}
        type="submit"
      >
        <TiArrowBack />
        Go back
      </Link>

      <MovieCard
        title={title}
        runtime={runtime}
        overview={overview}
        genres={genres}
        poster_path={poster_path}
      />

      <hr></hr>

      <AdditionalInfo movieId={movieId} />

      <hr></hr>

      <hr></hr>
    </>
  );
};

export default MovieDetails;
