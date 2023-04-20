const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrending = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getReviews = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getDetails = (movieId) => {
  return fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
};

export const getMovieCredits = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};
