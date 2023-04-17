import React from 'react'

 const MovieCard = () => {
  return (<>
    <div>MovieCard</div>
    <div
        className="card mb-3"
        //  style="max-width: 540px;"
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">

          <div className="card-body">
            <h5 className="card-title">Name</h5>
            <h5 className="card-title">User Score:</h5>
            <p className="card-text">Some content.</p>
          
              <h5 className="card-title">Overview</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h5 className="card-title">Generes:</h5>
              <p className="card-text">Some content.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard;
