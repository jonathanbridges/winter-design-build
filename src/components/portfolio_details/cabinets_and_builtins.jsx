import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/1.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/2.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/3.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/4.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/5.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/6.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/7.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/8.jpeg',
  process.env.PUBLIC_URL + '/img/cabinets_and_builtins/9.jpeg',
];

const captions = [
  'Cherry and Douglas Fir Knee Wall Closet',
  'Knee wall closet and custom Barn Door',
	'Cherry Drawer detail',
	'Closet back panels removable for deep storage',
	'Walnut and Doug Fir Vanity',
	'Vanity Corner detail',
  '',
	'White Oak floating desk',
	'Floating desk - detail',
]

export default class CabinetsAndBuiltIns extends React.Component {
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
            {/* <span className="sub_heading2">Cabinets and Built-Ins</span> */}
            <h4>Cabinets and Built-Ins</h4>
            {/* <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
            quis ipsum suspendisse.</p> */}
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
