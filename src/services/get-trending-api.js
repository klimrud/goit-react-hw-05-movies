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
