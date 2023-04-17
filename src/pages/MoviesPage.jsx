import React, { lazy, useEffect, useState } from 'react'
// import { MovieDetails } from 'components/MovieDetails/MovieDetails'
// import { SearchMovies } from 'components/SearchMovies/SearchMovies'

const SearchMovies = lazy(() => import("components/SearchMovies/SearchMovies"));

 const MoviesPage = () => {

   const [searchText, setSearchText] = useState([])


  useEffect(() => {
   const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b'
   const BASE_URL = 'https://api.themoviedb.org/3/'
   
   const getTrending=() =>{
     return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
     .then((res) =>{
       if (res.ok){ return res.json()}})
     .then((res) =>setSearchText(res.results))
     .catch((error) => console.log('error', error) )
   } 
    //  console.log('movie', movies)
  getTrending()
 
  }, [])
 
  const createSearchMovies = (searchText)=>{
    console.log(searchText);
  //  setSearchText(searchText)
  }
  


  return (<>
    <div>MoviesPage</div>
    <SearchMovies createSearchMovies={createSearchMovies}/>
    {/* <MovieDetails /> */}
    </>
  )
}

export default MoviesPage;