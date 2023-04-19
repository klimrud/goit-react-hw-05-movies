import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    const getTrending = () => {
      return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => setMovies(res.results))
        .catch(error => toast.error(`${error.message}`));
    };
    getTrending();
  }, [movies]);

  return (
    <>
      <h3 className=" p-md-4 m-5"> Trending today</h3>
      <ul className="list-group list-group-flush  m-5">
        {movies.map(({ title, id }) => (
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
    </>
  );
};

export default HomePage;
