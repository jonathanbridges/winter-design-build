import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/trim_and_mantle/1.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/2.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/3.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/4.jpeg',
  process.env.PUBLIC_URL + '/img/trim_and_mantle/5.jpg'
];

const captions = [
  'image 1 caption',
  'image 2 caption',
  'image 3 caption',
  'image 4 caption',
  'image 5 caption',
]

export default class TrimCarpentry extends React.Component {
  render() {
    return (
      <div className="row align-items-center mb-80 invert-port-parent">
        <div className="col-xl-6 col-md-6 invert-port-child">
          <div className="section_title">
            <span className="sub_heading2">Trim Carpentry</span>
            <h4>Trim Carpentry</h4>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
            <ImageLightbox
              images={images}
              captions={captions}
              imgUrl={null}
              isButton={true}
            />
          </div>
        </div>
        <div className="col-xl-5 offset-xl-1 col-md-6">
          <div className="single_project_thumb">
            <ImageLightbox
              images={images}
              captions={captions}
              imgUrl={images[0]}
              isButton={false}
            />
          </div>
        </div>
      </div>
    )
  }
}
