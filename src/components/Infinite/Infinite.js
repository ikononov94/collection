import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Infinite.css';

export default class Infinite extends Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if (this.props.isFetching) return;

    const scrollHeight = document.body.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop + window.innerHeight >= scrollHeight - 300) {
      this.props.nextImages();
    }
  }

  render() {
    return (
      <div className="infinite">
        {this.props.children}
        {
          this.props.isFetching &&
            <div className="loader loader-after">
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
