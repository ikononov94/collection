import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Infinite.css';

export default class Infinite extends Component {
  constructor(props) {
    super(props);

    this.onScrollVertical = this.onScrollVertical.bind(this);
    this.onScrollHorizontal = this.onScrollHorizontal.bind(this);
  }

  componentDidMount() {
    this.container.addEventListener('scroll', this.onScrollHorizontal);
    document.addEventListener('scroll', this.onScrollVertical);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScrollVertical);
    this.container.removeEventListener('scroll', this.onScrollHorizontal);
  }

  onScrollVertical() {
    if (this.props.isFetching) return;

    const scrollHeight = document.body.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (this.container.scrollHeight > 500 && scrollTop + window.innerHeight >= scrollHeight - 300) {
      this.props.nextImages();
    }
  }

  onScrollHorizontal() {
    if (this.props.isFetching) return;
    const scrollWidth = this.container.scrollWidth;
    const scrollLeft = window.pageXOffset || this.container.scrollLeft;
    if (this.container.scrollHeight < 500 && scrollLeft + window.innerWidth >= scrollWidth - 300) {
      this.props.nextImages();
    }
  }

  render() {
    return (
      <div className="infinite" ref={(container) => { this.container = container; }}>
        {this.props.children}
        {
          this.props.isFetching &&
            <div className="loader loader-after loader-landscape">
              <div className="loader__spin" />
            </div>
        }
      </div>
    );
  }
}

Infinite.propTypes = {
  nextImages: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isFetching: PropTypes.bool,
};

Infinite.defaultProps = {
  isFetching: false,
};
