import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const API_KEY = '70f59e22c7b6a563dca5a024c7d2f94b';
    const BASE_URL = 'https://api.themoviedb.org/3/';

    const getReviews = () => {
      return fetch(
        `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => setReviews(res.results))
        .catch(error => toast.error(`${error.message}`));
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      <hr></hr>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, url, author, content }) => (
            <li key={id}>
              <div className="offCanvas-header">
                <h5 className="offCanvas-title" id="offCanvasLabel">
                  Author:{author}
                </h5>
              </div>
              <div className="offCanvas-body">{content}</div>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && (
        <p className="m-5">We don't have any reviews for this movie.</p>
      )}
      <hr></hr>
    </>
  );
};

export default Reviews;
