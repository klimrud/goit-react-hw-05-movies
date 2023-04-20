import React, { lazy, useEffect, useRef, useState } from 'react';

import { TiArrowBack } from 'react-icons/ti';

import { Link, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'services/get-movie-details-api';
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
    getDetails(movieId)
      .then(res => setResults(res))
      .catch(error => toast.error(`We don't have any details for this movie.`));
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
