import React from 'react';
import ImageLightbox from '../image_lightbox';

const images = [
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/1.jpeg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/2.jpeg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/3.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/4.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/5.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/6.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/7.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/8.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/9.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/10.jpg',
  process.env.PUBLIC_URL + '/img/wainscotting_and_floor/11.png',
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
  'image 10 caption',
  'image 11 caption',
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
