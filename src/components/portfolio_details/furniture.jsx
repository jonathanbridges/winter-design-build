import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/furniture/1.jpg',
  process.env.PUBLIC_URL + '/img/furniture/2.jpg',
  process.env.PUBLIC_URL + '/img/furniture/3.jpg',
  process.env.PUBLIC_URL + '/img/furniture/4.jpeg',
  process.env.PUBLIC_URL + '/img/furniture/5.jpeg',
  process.env.PUBLIC_URL + '/img/furniture/6.jpeg',
  process.env.PUBLIC_URL + '/img/furniture/7.jpg',
];

const captions = [
  'Ash and Steel Kitchen Island',
  '',
	'Kitchen Island detail',
	'Tropical Chair - Various hardwoods',
	'Tropical Chair - Built at Rancho Mastatal, CR',
	'Tropical Chair detail',
	'Various versions of chair - They are propagating!',
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
            {/* <span className="sub_heading2">Furniture</span> */}
            <h4>Furniture</h4>
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
