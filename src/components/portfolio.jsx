import React, { Component } from 'react';

import CabinetsAndBuiltIns from './portfolio_details/cabinets_and_builtins';
import TrimCarpentry from './portfolio_details/trim_carpentry';
import Furniture from './portfolio_details/furniture';
import Woodworking from './portfolio_details/woodworking';
import Renovation from './portfolio_details/renovation';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="lastest_project">
        <div className="container">
          {/* <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-60">
                <span className="sub_heading">My Projects</span>
                <h3>Portfolio</h3>
                <div className="seperator" />
              </div>
            </div>
          </div> */}
          <CabinetsAndBuiltIns />
          <TrimCarpentry />
          <Furniture />
          <Woodworking />
          <Renovation />
        </div>
      </div >
    )
  }
}