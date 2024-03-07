import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout title={"Oops! Page Not Found"}>
      <div class="body">
        <div className="pnf">
          <h1 className="pnf-title">404 :(</h1>
          <h2 className="pnf-heading">Oops! Page not found.</h2>
          <h6 className="pnf-details">
            We apologize for the inconvenience, but the page you are looking for
            might have been removed or is temporarily unavailable.
          </h6>
          {/* <img src={accident} alt="" className="accident" /> */}
          <Link to="/" className="btn btn-warning">
            Go Back To Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
