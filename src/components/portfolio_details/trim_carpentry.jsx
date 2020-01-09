import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/trim_carpentry/1.jpg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/2.jpg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/3.jpg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/4.jpg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/5.jpg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/6.jpg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/7.jpg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/8.jpeg',
  process.env.PUBLIC_URL + '/img/trim_carpentry/9.jpeg',
];

const captions = [
  'Wainscoting and Maple Hardwood Floor',
  'Wainscoting detail',
  'Window Trim detail',
  '',
  'Floor retrofit to cabinets', 
  '',
  'Craftsman Style Cherry Mantle',
  '',
  'White Oak Railing',
  ''
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
