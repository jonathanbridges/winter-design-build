import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/1.jpeg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/2.jpeg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/3.jpeg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/4.jpeg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/5.jpg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/6_after.jpeg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/6_before.jpg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/7_after.jpeg',
  process.env.PUBLIC_URL + '/img/bath_vanity_and_tile/7_before.jpg'
];

const captions = [
  'image 1 caption',
  'image 2 caption',
  'image 3 caption',
  'image 4 caption',
  'image 5 caption',
  'image 6 caption',
  'image 7 caption',
  'image 8 caption',
  'image 9 caption',
]

export default class Furniture extends React.Component {
  render() {
    return (
      <div className="row align-items-center mb-80">
        <div className="col-xl-6 col-md-6">
          <div className="single_project_thumb">
            <ImageLightbox
              images={images}
              captions={captions}
              imgUrl={images[0]}
              isButton={false}
            />
          </div>
        </div>
        <div className="col-xl-5 offset-xl-1 col-md-6">
          <div className="section_title">
            <span className="sub_heading2">Furniture</span>
            <h4>Furniture</h4>
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
      </div>
    )
  }
}
