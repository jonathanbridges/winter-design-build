import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true,
  loop: true,
  margin: 0,
  navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
  dots: false,
  // autoplayHoverPause: true,
  // autoplaySpeed: 800,
  responsive: {
    0: {
      items: 1,
      nav: true

    },
    767: {
      items: 1,
      nav: true
    },
    992: {
      items: 1,
      nav: true
    },
  }
};

export default class Renovation extends React.Component {
  render() {
    return (
      <div>
        <div className="lastest_project">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6">
                <div className="section_title mb-60">
                  <h3>Renovation</h3>
                  {/* <div className="seperator"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* details_slider_area_start */}
        <div className="details_slider_area">
          <OwlCarousel className="details_active owl-carousel" options={options}>
            <div className="single_details builtin_bg_1"></div>
            <div className="single_details builtin_bg_2"></div>
            <div className="single_details builtin_bg_3"></div>
            <div className="single_details builtin_bg_4"></div>
            <div className="single_details builtin_bg_5"></div>
            <div className="single_details builtin_bg_6"></div>
            <div className="single_details builtin_bg_7"></div>
            <div className="single_details builtin_bg_8"></div>
          </OwlCarousel>
        </div>
        {/* details_slider_area_end */}
        {/* project_details_start */}
        <div className="project_details">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="project_details_left">
                  <div className="single_details">
                    <h3>Architechtural plan <br />
                      design and build</h3>
                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              liqua orem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              liqua orem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Eiusmod tempor incididunt ut labore et dolore magna liqua orem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="single_details">
                    <h3>Challenge</h3>
                    <p>Eiusmod tempor incididunt ut labore et dolore magna liqua orem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="single_details">
                    <h3>Solution</h3>
                    <p>Eiusmod tempor incididunt ut labore et dolore magna liqua orem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="projects_details_info">
                  <div className="details_thumb">
                    <img src="img/project/details_info.png" alt="" />
                  </div>
                  <div className="details_info">
                    <h3>Project info</h3>
                    <div className="details_info_list">
                      <div className="single_details_info d-flex justify-content-between align-items-center">
                        <span className="left_info">client</span>
                        <span className="right_info">Colorlib</span>
                      </div>
                      <div className="single_details_info d-flex justify-content-between align-items-center">
                        <span className="left_info">Categories:</span>
                        <span className="right_info">Exterior</span>
                      </div>
                      <div className="single_details_info d-flex justify-content-between align-items-center">
                        <span className="left_info">Date:</span>
                        <span className="right_info">July 14th, 2019</span>
                      </div>
                      <div className="single_details_info d-flex justify-content-between align-items-center">
                        <span className="left_info">Rating:</span>
                        <span className="right_info star">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                      <div className="single_details_info d-flex justify-content-between align-items-center">
                        <span className="left_info">Website:</span>
                        <span className="right_info"><a href="#site">examplesite.com</a></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project_share">
                  <div className="single_details_info d-flex justify-content-between align-items-center">
                    <span className="left_info">Share Project:</span>
                    <span className="right_info">
                      <a href="#fb"> <i className="fa fa-facebook" /> </a>
                      <a href="#tw"> <i className="fa fa-twitter" /> </a>
                      <a href="#ig"> <i className="fa fa-instagram" /> </a>
                      <a href="#pi"> <i className="fa fa-pinterest-p" /> </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* project_details_end */}
      </div>
    )
  }
}