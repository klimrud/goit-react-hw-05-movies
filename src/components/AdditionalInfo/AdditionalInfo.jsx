import React from 'react';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdditionalInfo = movieId => {
  return (
    <>
      {/* <div>AdditionalInfo</div> */}
      <div className="m-5">
        <h3 className="m-3">Additional information</h3>
        <nav className="nav flex-column">
          <Link className="nav-link" to="cast">
            Cast
          </Link>
          <Link className="nav-link" to="reviews">
            Reviews
          </Link>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
