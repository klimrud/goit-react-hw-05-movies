import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

 const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  console.log('params', movieId);

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=70f59e22c7b6a563dca5a024c7d2f94b&language=en-US&page=1
    const getReviews = () => {
      return fetch(
        `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        // .then(res => console.log('cast', res.result))
        .then(res => setReviews(res.results))
        .catch(error => console.log('error', error));
    };

    getReviews();
  }, [movieId]);

  console.log('reviews', reviews);

  return (
    <>
      <div>Reviews</div>
      <ul>
        {reviews.map(({id,url,author,content})=>(<li key={id}>
      <img  src={url} className="card-img-top" alt="..." />
      <div className="offCanvas-header">
        <h5 className="offCanvas-title" id="offCanvasLabel">
          Author:{author}
        </h5>
      </div>
      <div className="offCanvas-body">{content}
      </div></li>))}
</ul>
     
    </>
  );
};

export default Reviews;