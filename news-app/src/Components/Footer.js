import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = ({ setCategory }) => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-4 d-flex align-items-center mb-2 mb-md-0"
            onClick={() => setCategory("top")}
            style={{ cursor: "pointer" }}
          >
            <h5>
              NEWS <span className="badge bg-danger">SL</span>
            </h5>
          </div>
          <div className="col-md-4 text-center mb-2 mb-md-0">
            <small>&copy; Kalhara, 2024. All rights reserved.</small>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <a
              href="https://www.facebook.com"
              className="btn btn-dark p-2 me-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              className="btn btn-dark p-2 me-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="btn btn-dark p-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
