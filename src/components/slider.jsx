import React from 'react';

export default class Slider extends React.Component {
  render() {
    return (
      < div className = "slider_area" >
        {/* <div className="slider_active owl-carousel"> */}
          <div className="single_slider overlay2 d-flex align-items-center justify-content-center slider_bg_1">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text text-center">
                    <h3>Winter Design Build</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
                    <a href="#portfolio" className="boxed-btn2">See Our Portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
          {/* <div className="single_slider overlay2 d-flex align-items-center justify-content-center slider_bg_1">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text text-center">
                    <h3>We Design your space 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
                    <a href="#portfolio" className="boxed-btn2">See Our Projects</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider overlay2 d-flex align-items-center justify-content-center slider_bg_1">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider_text text-center">
                    <h3>We Design your space 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
                    <a href="#portfolio" className="boxed-btn2">See Our Projects</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div >
    )
  }
}