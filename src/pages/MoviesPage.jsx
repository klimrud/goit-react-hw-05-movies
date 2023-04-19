import React, { lazy, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchMovies = lazy(() => import('components/SearchMovies/SearchMovies'));

const MoviesPage = () => {
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    const getTrending = () => {
      return fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => setSearchText(res.results))
        .catch(error => toast.error(`${error.message}`));
    };
    getTrending();
  }, []);

  return (
    <>
      <SearchMovies />
    </>
  );
};

export default MoviesPage;
