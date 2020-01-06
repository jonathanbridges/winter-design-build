import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/built_in_closet/1.jpeg',
  process.env.PUBLIC_URL + '/img/built_in_closet/2.jpeg',
  process.env.PUBLIC_URL + '/img/built_in_closet/3.jpeg',
  process.env.PUBLIC_URL + '/img/built_in_closet/4.jpeg',
  process.env.PUBLIC_URL + '/img/built_in_closet/5.jpg',
  process.env.PUBLIC_URL + '/img/built_in_closet/6.jpg',
  process.env.PUBLIC_URL + '/img/built_in_closet/7.jpg',
  process.env.PUBLIC_URL + '/img/built_in_closet/8.jpg'
];

export default class Woodworking extends React.Component {
  render() {
    return (
      <div className="row align-items-center mb-80 invert-port-parent">
        <div className="col-xl-6 col-md-6 invert-port-child">
          <div className="section_title">
            <span className="sub_heading2">Woodworking</span>
            <h4>Woodworking</h4>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
            <ImageLightbox
              images={images}
              imgUrl={null}
              isButton={true}
            />
          </div>
        </div>
        <div className="col-xl-5 offset-xl-1 col-md-6">
          <div className="single_project_thumb">
            <ImageLightbox
              images={images}
              imgUrl={images[0]}
              isButton={false}
            />
          </div>
        </div>
      </div>
    )
  }
}
