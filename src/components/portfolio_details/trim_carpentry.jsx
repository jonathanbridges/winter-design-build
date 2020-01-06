import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/trim_and_mantle/1.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/2.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/3.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/4.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/5.jpg'
];

export default class TrimCarpentry extends React.Component {
  render() {
    return (
      <div className="row align-items-center mb-80">
        <div className="col-xl-6 col-md-6">
          <div className="section_title">
            <span className="sub_heading2">Trim Carpentry</span>
            <h4>Trim Carpentry</h4>
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
