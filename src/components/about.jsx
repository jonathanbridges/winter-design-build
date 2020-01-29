import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render() {
    return (
      <div className="about_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-md-12 about-top">
              <div className="about_thumb">
                <img src="img/about/about.jpg" alt="Nicholas Winter" />
                {/* <div className="exprience">
                  <h1>25</h1>
                  <span>Years of Experience</span>
                </div> */}
              </div>
              <div className="section_title about-title">
                <span className="sub_heading">About Me</span>
                <h3>Nicholas Winter</h3>
                <div className="seperator" />
              </div>
            </div>
            <div className="col-xl-12 col-md-12">
              <div className="about_info">
                <p>Growing up in central Vermont I spent my formative years exploring woods and historic farmhouses as well as shoveling and “shredding” the snow in back yards and local ski hills on my snowboard. Having always been a visual learner my interests led me down a winding road to Massachusetts College of Art and Design where I earned a B.F.A. in Sculpture.</p>
                <p>After college I held a variety of positions, working as a welder, a mentor to inner-city youth, and even a stint in Colorado building trails for Rocky Mountain Youth Corps. During a formative project with Handshouse Studio, I discovered my love for architecture and carpentry.</p>
                <p>Handshouse Studios is a non-profit organization run by Rick and Laura Brown whose mission is the rebuilding of lost historic objects through hands-on education. In 2011, after extensive research, we traveled to Poland to embark on the replication of the 17th century Gwoździec Synagogue using only historically accurate methods and materials. The Synagogue was one of approximately 200 of its kind, all of which were destroyed in World War II. Our efforts are now a permanent exhibition at the Museum of the history of Polish Jews, Warsaw.</p>
                <p>Learn more here:</p>
                <div className="about-link-img-wrapper">
                  <ul className="about_list">
                    <li><a href="https://www.handshouse.org/" target="_blank" rel="noopener noreferrer" alt="Handshouse Studio">Handshouse Studio</a></li>
                    <li><a href="https://www.polishsynagogue.com/" target="_blank" rel="noopener noreferrer" alt="Polish Synagogue">Polish Synagogue</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/POLIN_Museum_of_the_History_of_Polish_Jews" target="_blank" rel="noopener noreferrer" alt="POLIN Museum of the History of Polish Jews">POLIN Museum of the History of Polish Jews</a></li>
                  </ul>
                  <div className="poland-img"></div>
                </div>
                <p>In 2015 I decided to move back home to the green hills and old farmhouses of Vermont and focus on carpentry in earnest. Since then I’ve worked with numerous talented builders learning the trade of home building and renovation as well as the fundamentals of building science and Passive House efficiency standards.</p>
                <p>Today I am dedicated to honing my carpentry skills, especially in the realms of furniture; finish work, cabinets and timber framing.  I work to combine my fine arts background with a love of history, community, and craft to create remarkable, long-lasting projects in wood.</p>
                <p>When not making sawdust I’m spending time back in the woods hiking, snowshoeing, and occasionally skiing all in the company of my lovely fiancé Rachel.</p>
                <Link to="/portfolio" className="boxed-btn">Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}