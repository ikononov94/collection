import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';


class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { search } = this.props;
    const { value } = this.input;

    event.preventDefault();

    search(encodeURIComponent(value.trim()));
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          className="search-form__input"
          type="text"
          ref={(input) => { this.input = input; }}
        />
        <button className="search-form__button">Найти</button>
      </form>);
  }
}


SearchForm.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchForm;
