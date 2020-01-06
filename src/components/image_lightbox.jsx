import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class ImageLightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { images, captions, imgUrl, isButton } = this.props;

    let visualization;
    if (isButton) {
      visualization = (
        <button onClick={() => this.setState(
          prevState => ({
            isOpen: !prevState.isOpen
          })
        )} className="boxed-btn">View More</button>
      )
    } else {
      visualization = (
        <img src={imgUrl} alt="cool" onClick={() => this.setState(
          prevState => ({
            isOpen: !prevState.isOpen
          })
        )} className="port-img"/>
      )
    }

    return (
      <div>
        {visualization}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            imageCaption={captions[this.state.photoIndex]}
          />
        )}
      </div>
    );
  }
}