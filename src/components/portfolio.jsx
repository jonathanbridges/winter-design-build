import React from 'react';
import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="lastest_project">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-60">
                <span className="sub_heading">My Projects</span>
                <h3>Portfolio</h3>
                <div className="seperator" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="single_project_thumb">
                <img src={process.env.PUBLIC_URL + '/img/trim_and_mantle/1.jpeg'} alt="Trim and Mantle" />
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Trim and Mantle</span>
                <h4>Woodworking</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <Link to="/woodworking" className="boxed-btn">View More</Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Reclaimed Fir Accent Wall</span>
                <h4>Cabinetry</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <Link to="/cabinetry" className="boxed-btn">View More</Link>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="single_project_thumb">
                <img src={process.env.PUBLIC_URL + '/img/reclaimed_fir_accent_wall/1.jpeg'} alt="Reclaimed Fir Accent Wall" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="single_project_thumb">
                <img src={process.env.PUBLIC_URL + '/img/wedding_arbor/arbor_portrait.jpg'} alt="Wedding Arbor" />
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Wedding Arbor</span>
                <h4>Trim Cabinetry</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <Link to="/trim-cabinetry" className="boxed-btn">View More</Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Built-in Closet</span>
                <h4>Renovation</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <Link to="/renovation" className="boxed-btn">View More</Link>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="single_project_thumb">
                <img src={process.env.PUBLIC_URL + '/img/built_in_closet/1.jpeg'} alt="Built-in Closet" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="single_project_thumb">
                <img src={process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/1.jpeg'} alt="Bath Vanity and Tile" />
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Bath Vanity and Tile</span>
                <h4>Design</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <Link to="/design" className="boxed-btn">View More</Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Wainscotting and Floor</span>
                <h4>Art</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <Link to="/art" className="boxed-btn">View More</Link>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="single_project_thumb">
                <img src={process.env.PUBLIC_URL + '/img/wainscotting_and_floor/1.jpeg'} alt="Wainscotting and Floor" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-80">
            <div className="col-xl-6 col-md-6">
              <div className="single_project_thumb">
                <img src={process.env.PUBLIC_URL + '/img/ash_and_steel_kitchen_island/1.jpg'} alt="Ash and Steel Kitchen Island" />
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <div className="section_title">
                <span className="sub_heading2">Burlington, VT</span>
                <h4>Ash and Steel Kitchen Island</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
                <Link to="/ash-and-steel-kitchen-island" className="boxed-btn">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}