import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render() {
    return (
      <div className="about_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-6">
              <div className="about_thumb">
                <img src="img/about/about.jpg" alt="Nicholas Winter" />
                {/* <div className="exprience">
                  <h1>25</h1>
                  <span>Years of Experience</span>
                </div> */}
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="about_info">
                <div className="section_title">
                  <span className="sub_heading">About Me</span>
                  <h3>Nicholas Winter</h3>
                  <div className="seperator" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            viverra maecenas accumsan lacus vel facilisis. </p>
                <ul className="about_list">
                  <li>Consectetur adipiscing sed do eiusmod. </li>
                  <li>Eiusmod tempor incididunt labore. </li>
                </ul>
                <Link to="/portfolio" className="boxed-btn">Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}