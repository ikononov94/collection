import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SlideShow.css';

export default class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.imgIndex,
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      index: nextProps.imgIndex,
      loading: true,
    });
  }

  render() {
    const {
      images, onClose, nextImage, prevImage,
    } = this.props;
    return (
      <div className="show-image">
        <div className="show-image__full-screen">
          <img
            role="presentation"
            className="show-image__image"
            src={images[this.state.index].contentUrl}
            onClick={nextImage}
            onLoad={() => this.setState({ loading: false })}
            alt={images[this.state.index].name}
          />
        </div>
        {this.state.loading &&
        <div className="loader loader-fullscreen">
          <div className="loader__spin" />
        </div>
      }
        <div className="show-image__prev" role="presentation" onClick={prevImage} />
        <div className="show-image__next" role="presentation" onClick={nextImage} />
        <div className="show-image__close" role="presentation" onClick={onClose}>&times;</div>
      </div>
    );
  }
}

SlideShow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  imgIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
};
