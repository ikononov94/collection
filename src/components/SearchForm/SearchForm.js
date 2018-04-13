import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';


class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    const { fetchImages } = this.props;
    const { searchValue } = this.state;

    fetchImages(encodeURIComponent(searchValue.trim()));

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          className="search-form__input"
          type="text"
          onChange={this.handleChange}
        />
        <button className="search-form__button">Найти</button>
      </form>);
  }
}


SearchForm.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};

export default SearchForm;
