 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMoviesSearch } from 'components/hooks/useMoviesSearch';
  // import { getTrending } from 'components/services/get-trending-api ';

 const HomePage = () => {
 const [movies, setMovies] = useState([])


 useEffect(() => {
  const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b'
  const BASE_URL = 'https://api.themoviedb.org/3/'
  
  const getTrending=() =>{
    return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then((res) =>{
      if (res.ok){ return res.json()}})
    .then((res) =>setMovies(res.results))
    .catch((error) => console.log('error', error) )
  } 
   getTrending()

 }, [movies])


  return (
    <>
      <div>HomePage</div>
      <h3>Trending today</h3>
      <ul className="list-group list-group-flush">
       {movies.map(({title, id})=>(
        <Link key={id} to={`/movies/${id}`} className="list-group-item">{title}</Link>))}
      </ul>
    </>
  );
};


export default HomePage;