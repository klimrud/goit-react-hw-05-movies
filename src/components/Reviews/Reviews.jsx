import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/get-trending-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(res => setReviews(res.results))
      .catch(error => toast.error(`We don't have any reviews for this movie.`));
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
