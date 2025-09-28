import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="main-content-div not-found-background">
      <div className="col-md-6 m-auto col-xl-4 col-12">
        <h3>umm...what?</h3>
        <p>
          Looks like something went wrong.
          Sorry about that. Maybe try again later?
        </p>
        <Link to="/">
          <button
            type="button"
            className="btn btn-primary btn-sm"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
