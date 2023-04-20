import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrending } from 'services/get-trending-api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(res => setMovies(res.results))
      .catch(error =>
        toast.error(`We don't have any trending for this movie.`)
      );
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
