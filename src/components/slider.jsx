import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';

const options = {
  loop: true,
  margin: 0,
  items: 1,
  autoplay: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  smartSpeed: 800,
  // autoHeight: true,
  responsive: {
    0: {
      items: 1,
      dots: false
    },
    767: {
      items: 1,
      dots: false
    },
    992: {
      items: 1
    },
    1200: {
      items: 1,
    },
    1500: {
      items: 1
    }
  }
};

export default class Slider extends React.Component {
  render() {
    return (
      <div className ="slider_area">
        <OwlCarousel className="slider_active owl-carousel" options={options}>
          <div className="single_slider overlay2 d-flex align-items-center justify-content-center hero_bg_1">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text text-center">
                    <h3>Winter Design Build</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
                    <Link to="/portfolio" className="boxed-btn2">See My Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider overlay2 d-flex align-items-center justify-content-center hero_bg_2">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text text-center">
                    <h3>Winter Design Build</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
                    <Link to="/portfolio" className="boxed-btn2">See My Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider overlay2 d-flex align-items-center justify-content-center hero_bg_3">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text text-center">
                    <h3>Winter Design Build</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
                    <Link to="/portfolio" className="boxed-btn2">See My Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div >
    )
  }
}