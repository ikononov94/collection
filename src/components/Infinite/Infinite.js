import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Infinite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if (this.state.loading) return;

    const scrollHeight = document.body.scrollHeight || document.body.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop + window.innerHeight >= scrollHeight - 300) {
      this.setState({ loading: true });
      this.nextPage();
    }
  }

  async nextPage() {
    try {
      await this.props.nextImages();
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="infinity">
        {this.props.children}
        {
          this.state.loading &&
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
};
