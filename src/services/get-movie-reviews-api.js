const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getReviews = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};
