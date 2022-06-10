import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>
              <a href="confusion@foood.net">: confusion@foood.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="#">
                <span className="fa fa-google"></span>
              </a>
              <a className="btn btn-social-icon btn-facebook" href="#">
                <span className="fa fa-facebook"></span>
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="#">
                <span className="fa fa-linkedin"></span>
              </a>
              <a className="btn btn-social-icon btn-twitter" href="#">
                <span className="fa fa-twitter"></span>
              </a>
              <a className="btn btn-social-icon btn-google" href="#">
                <span className="fa fa-youtube-square"></span>
              </a>
              <a
                className="btn btn-social-icon btn-envelope"
                href="mailto@gmail.com"
              >
                <span className="fa fa-envelope"></span>
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2018 Ristorante Con Fusion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
