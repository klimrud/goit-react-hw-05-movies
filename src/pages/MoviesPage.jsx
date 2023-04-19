import React, { lazy } from 'react';


const SearchMovies = lazy(() => import('components/SearchMovies/SearchMovies'));

const MoviesPage = () => {
  
  return (
    <main>
      <SearchMovies  />
    </main>
  );
};

export default MoviesPage;
