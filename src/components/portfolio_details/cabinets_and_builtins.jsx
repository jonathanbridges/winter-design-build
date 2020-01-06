import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/ash_and_steel_kitchen_island/1.jpg',
  process.env.PUBLIC_URL + '/img/ash_and_steel_kitchen_island/2.jpg',
  process.env.PUBLIC_URL + '/img/ash_and_steel_kitchen_island/3.jpg',
  process.env.PUBLIC_URL + '/img/ash_and_steel_kitchen_island/4.jpg',
  process.env.PUBLIC_URL + '/img/ash_and_steel_kitchen_island/5.png',
  process.env.PUBLIC_URL + '/img/ash_and_steel_kitchen_island/6.png',
];

export default class CabinetsAndBuiltIns extends React.Component {
  render() {
    return (
      <div className="row align-items-center mb-80">
        <div className="col-xl-6 col-md-6">
          <div className="single_project_thumb">
            <ImageLightbox
              images={images}
              imgUrl={images[0]}
              isButton={false}
            />
          </div>
        </div>
        <div className="col-xl-5 offset-xl-1 col-md-6">
          <div className="section_title">
            <span className="sub_heading2">Cabinets and Built-Ins</span>
            <h4>Cabinets and Built-Ins</h4>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p>
            <ImageLightbox
              images={images}
              imgUrl={null}
              isButton={true}
            />
          </div>
        </div>
      </div>
    )
  }
}
