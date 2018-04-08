import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SlideShow.css';

export default class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: null,
      loading: false,
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.onCloseSlideShow = this.onCloseSlideShow.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      index: nextProps.index,
      loading: true,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if (this.state.index !== null) {
      document.documentElement.scrollTop = 0;
    }
  }

  onCloseSlideShow() {
    this.setState({
      index: null,
    });
  }

  nextImage() {
    this.setState({
      index: this.state.index >= this.props.images.length - 1 ?
        this.props.images.length - 1 :
        this.state.index + 1,
      loading: !(this.state.index >= this.props.images.length - 1),
    });
  }

  prevImage() {
    this.setState({
      index: this.state.index <= 0 ? 0 : this.state.index - 1,
      loading: !(this.state.index <= 0),
    });
  }

  render() {
    const { images } = this.props;
    const { index, loading } = this.state;
    return (
      index !== null &&
      <div className="show-image">
        <div className="show-image__full-screen">
          <img
            role="presentation"
            className="show-image__image"
            src={images[index].contentUrl}
            onClick={this.nextImage}
            onLoad={() => this.setState({ loading: false })}
            alt={images[index].name}
          />
        </div>
        {loading &&
          <div className="loader loader-fullscreen">
            <div className="loader__spin" />
          </div>
        }
        <div className="show-image__prev" role="presentation" onClick={this.prevImage} />
        <div className="show-image__next" role="presentation" onClick={this.nextImage} />
        <div className="show-image__close" role="presentation" onClick={this.onCloseSlideShow}>&times;</div>
      </div>
    );
  }
}

SlideShow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
};

SlideShow.defaultProps = {
  index: null,
};
