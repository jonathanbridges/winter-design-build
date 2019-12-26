import React from 'react';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="lastest_project">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-60">
                <span className="sub_heading">My Skillset</span>
                <h3>Portfolio</h3>
                <div className="seperator" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="single_project_thumb">
                <img src="img/project/1.png" alt="" />
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Dubai, UAE</span>
                <h4>Woodworking</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <a href="#woodworking" className="boxed-btn">View More</a>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Dhaka, Bangladesh</span>
                <h4>Cabinetry</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <a href="#cabinetry" className="boxed-btn">View More</a>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="single_project_thumb">
                <img src="img/project/2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="single_project_thumb">
                <img src="img/project/3.png" alt="" />
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Dubai, UAE</span>
                <h4>Trim Cabinetry</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <a href="#trim_cabinetry" className="boxed-btn">View More</a>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Dhaka, Bangladesh</span>
                <h4>Renovation</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <a href="#renovation" className="boxed-btn">View More</a>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="single_project_thumb">
                <img src="img/project/4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="single_project_thumb">
                <img src="img/project/1.png" alt="" />
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Dubai, UAE</span>
                <h4>Design</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <a href="#design" className="boxed-btn">View More</a>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Dhaka, Bangladesh</span>
                <h4>Art</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <a href="#art" className="boxed-btn">View More</a>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="single_project_thumb">
                <img src="img/project/2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}