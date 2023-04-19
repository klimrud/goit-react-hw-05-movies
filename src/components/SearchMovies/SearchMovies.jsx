import React, { useEffect, useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchMovies = createSearchMovies => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie' ?? '');

  const location = useLocation();

  useEffect(() => {
    if (!movie) return;

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
        .then(res => {
          if (!res.results.length) {
            toast.error(
              "We don't have any movies matching this search. Try again..."
            );
            return;
          } else {
            setMovies(res.results);
          }
        })
        .catch(error => toast.error(`${error.message}`));
    };

    getSearchMovies();
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.text.value === '') {
      toast.info('Enter the title of the movie');
      return;
    }

    const form = e.currentTarget;
    setSearchParams({ movie: form.elements.text.value.trim() });

    form.reset();
  };

  return (
    <>
      <div className="container-fluid">
        <form className="d-flex m-5" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="text"
            name="text"
            aria-label="Search"
            aria-describedby="button-addon2"
            placeholder="Search"
            autoFocus
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>

      {movies && (
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
    </>
  );
};

export default SearchMovies;
