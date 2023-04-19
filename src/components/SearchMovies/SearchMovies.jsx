import React, { useEffect, useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchMovies = (createSearchMovies) => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const movie = searchParams.get('movie') ?? '';

  const updateQueryString = evt => {
    const value = evt.target.value;
    if (value === '') {
      return setSearchParams({});
    }

    setSearchParams({
      movie: value,
    });
  };


  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const getSearchMovies = () => {
      return fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movie}`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => setMovies(res.results))
        .catch(error => toast.error(`${error.message}`));
    };

    getSearchMovies();
  }, [movie]);



  const handleSubmit = e => {
    e.preventDefault();

    setValue('');
  };

  return (
    <>
      <div className="container-fluid">
        <form className="d-flex m-5" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={movie}
            onChange={updateQueryString}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* {value === '' && <p>Enter the title of the movie.</p>} */}
      {movies.length > 0 && (
        <ul className="list-group list-group-flush m-5">
          {movies.map(({ id, title }) => (
            <Link
              key={id}
              to={`/movies/${id}`}
              state={{ from: location }}
              className="list-group-item"
            >
              {title}
            </Link>
          ))}
        </ul>
      )}
      {value !== movie && (
        <p className="m-5">
          We don't have any movies matching this search. Try again...
        </p>
      )}
    </>
  );
};

export default SearchMovies;
