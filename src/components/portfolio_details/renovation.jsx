import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/renovations/1_after.jpg',
  process.env.PUBLIC_URL + '/img/renovations/2_before.jpg',
  process.env.PUBLIC_URL + '/img/renovations/3_before.jpg',
  process.env.PUBLIC_URL + '/img/renovations/4_after.jpeg',
  process.env.PUBLIC_URL + '/img/renovations/5.jpeg',
  process.env.PUBLIC_URL + '/img/renovations/6.jpg',
  process.env.PUBLIC_URL + '/img/renovations/7.jpeg',
  process.env.PUBLIC_URL + '/img/renovations/8.jpeg',
  process.env.PUBLIC_URL + '/img/renovations/9.jpeg',
];

const captions = [
  'Bath remodel - Custom built Craftsman Barn Door',
  'Bath remodel - Door Before',
  'Bath Remodel – Sink Before',
  'Bath Remodel – Sink After',
  'Handmade floor tile with ‘Ombre’ design',
  '',
  'Reclaimed Douglas fir headboard wall',
  'Hidden Shelves(1 of 2)',
  'Hidden Shelves(2 of 2)',
]

export default class Renovation extends React.Component {
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
            <span className="sub_heading2">Renovation</span>
            <h4>Renovation</h4>
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
