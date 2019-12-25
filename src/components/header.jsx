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
                          <a className="active" href="index.html">
                            home
                          </a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="project.html">Projects</a>
                        </li>
                        <li>
                          <a href="service.html">Services</a>
                        </li>
                        <li>
                          <a href="#blog">
                            blog <i className="ti-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="single-blog.html">single-blog</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#pages">
                            pages <i className="ti-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="project-details.html">project-details</a>
                            </li>
                            <li>
                              <a href="elements.html">elements</a>
                            </li>
                          </ul>
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