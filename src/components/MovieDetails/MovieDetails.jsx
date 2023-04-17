import React, { lazy, useEffect, useRef, useState } from 'react';
// import { Reviews } from 'components/Reviews/Reviews';
// import { Cast } from 'components/Cast/Cast';
// import { MovieCard } from 'components/MovieCard/MovieCard';
// import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { TiArrowBack } from 'react-icons/ti';
// import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Link, useLocation, useParams } from 'react-router-dom';

const AdditionalInfo = lazy(() => import("components/AdditionalInfo/AdditionalInfo"));

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [results, setResults] = useState([]);

  const { movieId } = useParams();
  console.log('params', movieId);

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    const getTrending = () => {
      return (
        fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          // .then((res) =>console.log('first', res))
          .then(res => setResults(res))
          .catch(error => console.log('error', error))
      );
    };

    getTrending();
  }, [movieId]);

  console.log('results', results);

  console.log('location', location);

  return (
    <>
      <div>
        <a className="nav-link" href="/movies/:movieId">
          MovieDetails movieId={movieId}
        </a>
      </div>

      {/* <SearchMovies  /> */}

      {/* <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div> */}

      <Link
        className="btn btn-outline-secondary"
        to={backLinkLocationRef.current}
        type="submit"
      >
        <a className="nav-link" href="/">
          <TiArrowBack />
          Go back
        </a>
      </Link>

      {/* <MovieCard /> */}

      <div
        className="card mb-3"
        //  style="max-width: 540px;"
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={results.homepage}
              className="img-fluid rounded-start"
              alt="..."
              width="370"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name: {results.title}</h5>
              <h5 className="card-title">User Score:</h5>
              <p className="card-text">{results.runtime}%</p>

              <h5 className="card-title">Overview: </h5>
              <p className="card-text">{results.overview}</p>
              <h5 className="card-title">Genres: </h5>
              {/* <p className="card-text">{results.genres[0].name}</p> */}
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <AdditionalInfo movieId={movieId} />

      <hr></hr>

      {/* <div className="">
        <Cast />
      </div>
      <hr></hr>

      <div className="">
        <Reviews />
      </div>  */}
      <hr></hr>
    </>
  );
};

export default MovieDetails;
