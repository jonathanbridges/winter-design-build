import React from 'react';

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
                          <a className="active" href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="#portfolio">Portfolio <i className="ti-angle-down" /></a>
                          <ul className="submenu">
                            <li>
                              <a href="project-details.html">Woodworking</a>
                            </li>
                            <li>
                              <a href="elements.html">Cabinetry</a>
                            </li>
                            <li>
                              <a href="elements.html">Trim Cabinetry</a>
                            </li>
                            <li>
                              <a href="elements.html">Renovation</a>
                            </li>
                            <li>
                              <a href="elements.html">Design</a>
                            </li>
                            <li>
                              <a href="elements.html">Art</a>
                            </li>                                                                                                                
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="get_in_tauch">
                    <a href="#contact" className="boxed-btn">
                      GET IN TOUCH
                    </a>
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