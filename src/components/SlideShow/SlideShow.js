import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onCloseImage, nextImage, prevImage, loadedImage, errorLoadedImage } from '../../actions/slideShow';
import './SlideShow.css';

class SlideShow extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }

  render() {
    const { images, index, loadingImage } = this.props;
    return (
      index !== null &&
      <div className="show-image">
        <div className="show-image__full-screen">
          <img
            role="presentation"
            className="show-image__image"
            src={images[index].contentUrl}
            onClick={this.props.nextImage}
            onLoad={this.props.loadedImage}
            onError={this.props.errorLoadedImage}
            alt={images[index].name}
          />
        </div>
        {loadingImage &&
          <div className="loader loader-fullscreen">
            <div className="loader__spin" />
          </div>
        }
        <div className="show-image__prev" role="presentation" onClick={this.props.prevImage} />
        <div className="show-image__next" role="presentation" onClick={this.props.nextImage} />
        <div className="show-image__close" role="presentation" onClick={this.props.onCloseImage} />
      </div>
    );
  }
}

SlideShow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
    index: PropTypes.number,
    loadingImage: PropTypes.bool,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
  loadedImage: PropTypes.func.isRequired,
  onCloseImage: PropTypes.func.isRequired,
  errorLoadedImage: PropTypes.func.isRequired,
};

SlideShow.defaultProps = {
  images: [],
  index: null,
  loadingImage: false,
};

export default connect(
  state => ({
    images: state.searchReducer.images.value,
    index: state.slideShowReducer.index,
    loadingImage: state.slideShowReducer.loadingImage,
  }),
  dispatch => ({
    onCloseImage: () => dispatch(onCloseImage()),
    nextImage: () => dispatch(nextImage()),
    prevImage: () => dispatch(prevImage()),
    loadedImage: () => dispatch(loadedImage()),
    errorLoadedImage: () => dispatch(errorLoadedImage()),
  }),
)(SlideShow);
