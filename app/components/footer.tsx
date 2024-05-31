import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-slate-950">Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  href="#"
                >
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  href="#"
                >
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-white"
                  style={{ textDecoration: "none" }}
                  href="#"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Company Name</h5>
            <p>
              &copy; 2024 design <code>By jassim</code>
            </p>
          </div>
        </div>
        <FaBookOpenReader className="f-book"></FaBookOpenReader>
      </div>
    </footer>
  );
};

export default Footer;
