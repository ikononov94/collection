import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SlideShow.css';

export default class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.imgIndex,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      index: nextProps.imgIndex,
    });
  }

  render() {
    const {
      images, onClose, nextImage, prevImage,
    } = this.props;
    return (
      <div className="show-image">
        <div
          className="show-image__full-screen"
          role="presentation"
          style={{
              backgroundImage: `url(${images[this.state.index].contentUrl})`,
          }}
          onClick={nextImage}
        />
        <div className="show-image__prev" role="presentation" onClick={prevImage} />
        <div className="show-image__next" role="presentation" onClick={nextImage} />
        <div className="show-image__close" role="presentation" onClick={onClose}>&times;</div>
      </div>
    );
  }
}

SlideShow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.array).isRequired,
  imgIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
};
