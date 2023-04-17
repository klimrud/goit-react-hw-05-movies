import { Route, Routes } from 'react-router-dom';

// import { HomePage } from '../pages/HomePage';
// import { MoviesPage } from '../pages/MoviesPage';
import { Layout } from './Layout';
// import { MovieDetails } from './MovieDetails/MovieDetails';
//  import { Cast } from './Cast/Cast';
//  import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

 const HomePage = lazy(() => import("../pages/HomePage"));
 const MoviesPage = lazy(() => import("../pages/MoviesPage"));
 const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
 const Cast = lazy(() => import("./Cast/Cast"));
 const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
