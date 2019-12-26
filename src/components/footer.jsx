import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return(
      <footer className="footer footer_bg">
        <div className="footer_top">
          <div className="container-fluid p-0">
            <div className="row no-gutters justify-content-center">
              {/* <div className="col-xl-3 col-12 col-md-4">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <a href="index.html">
                      <img src="img/footer-logo.png" alt="" />
                    </a>
                  </div>
                  <ul className="social_links">
                    <li>
                      <a href="#"><i className="fa fa-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-xl-9 col-12 col-md-8">
                <div className="footer_header d-flex justify-content-between align-items-center">
                  <div className="footer_header_left">
                    <h3>Do youn have any project or Query?</h3>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                  <div className="footer_btn">
                    <Link to="/contact" className="boxed-btn2">Contact Us</Link>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-12 col-md-12">
                    <div className="row">
                      <div className="col-xl-4 col-12 col-md-4">
                        <div className="footer_widget">
                          <h3 className="footer_heading">
                            Navigation
                          </h3>
                          <ul className="quick_links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-12 col-md-4">
                        <div className="footer_widget">
                          <h3 className="footer_heading">
                            Links
                          </h3>
                          <ul className="quick_links">
                            <li><a href="#1">Work in Poland</a></li>
                            <li><a href="#2">MassArt</a></li>
                            <li><a href="#3">Other Link</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-4 col-12 col-md-4 ">
                        <div className="footer_widget">
                          <h3 className="footer_heading">
                            Speak Now
                          </h3>
                          <ul className="quick_links">
                            <li><a href="tel:1-802-371-9247">(802) 371-9247</a></li>
                            <li><a href="mailto:nicholasfarnhamwinter@gmail.com">Email</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copy_right">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © 2020 All rights reserved | This template is made with using <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </footer>
    )
  }
}