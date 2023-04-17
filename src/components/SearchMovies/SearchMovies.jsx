import React, { useEffect, useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';

 const SearchMovies = () => {
  //   const [searchText, setSearchText] = useState('')
  //  const [value, setValue] = useState('')
   const [movies, setMovies] = useState([]);


 const location= useLocation();


  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams);
  const movie = searchParams.get('movie') ?? '';

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const getSearchMovies = () => {
      // https://api.themoviedb.org/3/search/movie?api_key=70f59e22c7b6a563dca5a024c7d2f94b&language=en-US&page=1&include_adult=false

      return (
        fetch(
          `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movie}`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
          // .then((res) =>console.log('cast', res))
          .then(res => setMovies(res.results))
          .catch(error => console.log('error', error))
      );
    };

    getSearchMovies();
  }, [movie]);
 

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget
    setSearchParams({ username: form.elements.movies.value });
    form.reset();
  };

  const updateQueryString= (evt)=>{
    if(evt.target.value==='')
    {
     return setSearchParams({});
    }
    console.log(evt.target.value);
      setSearchParams({
        movie: evt.target.value,
      });
    
  };

console.log('location', location);

  return (
    <>
      <div className="container-fluid">
        <form
          className="d-flex"
          role="search"
           onSubmit={handleSubmit}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // value={value}
            // onChange={handleChange}

              value={movie}
            onChange={updateQueryString}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
      <h3>Movies</h3>
      <ul className="list-group list-group-flush">
        {movies.map(({id,title}) => (
          <Link key={id} to={`/movies/${id}`} state={{from: location}} className="list-group-item">
            {title}
          </Link>
        ))}
      </ul>
    </>
  );
};


export default SearchMovies;