import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area white-bg">
            <div className="container-fluid p-0">
              <div className="row align-items-center justify-content-between no-gutters">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo-img">
                    <a href="index.html">
                      <img src="img/logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/portfolio">Portfolio</Link>
                          {/* <Link to="/portfolio">Portfolio <i className="ti-angle-down" /></Link> */}
                          {/* <ul className="submenu">
                            <li>
                              <Link to="/woodworking">Woodworking</Link>
                            </li>
                            <li>
                              <Link to="/cabinetry">Cabinetry</Link>
                            </li>
                            <li>
                              <Link to="/trim-cabinetry">Trim Cabinetry</Link>
                            </li>
                            <li>
                              <Link to="/renovation">Renovation</Link>
                            </li>
                            <li>
                              <Link to="/design">Design</Link>
                            </li>
                            <li>
                              <Link to="/art">Art</Link>
                            </li>         
                            <li>
                              <Link to="/ash-and-steel-kitchen-island">Ash and Steel Kitchen Island</Link>
                            </li>                                                                                                             
                          </ul> */}
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="get_in_tauch">
                    <Link to="/contact" className="boxed-btn">GET IN TOUCH</Link>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}