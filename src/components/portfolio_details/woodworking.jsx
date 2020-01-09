import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/woodworking/1.jpg',
  process.env.PUBLIC_URL + '/img/woodworking/2.jpg',
  process.env.PUBLIC_URL + '/img/woodworking/3.jpg',
  process.env.PUBLIC_URL + '/img/woodworking/4.jpg',
  process.env.PUBLIC_URL + '/img/woodworking/5.jpg',
];

const captions = [
  'Wedding Arbor - Northern White Cedar',
  'With the lovely couple!',
  '',
  'Spalted Ambrosia Maple and Walnut box',
  'Box Lid detail',
]

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
