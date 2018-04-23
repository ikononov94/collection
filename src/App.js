import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchImages, fetchNextImages } from './actions/search';
import { onClickImage } from './actions/slideShow';
import SearchForm from './components/SearchForm/SearchForm';
import Images from './components/Images/Images';
import Preview from './components/SlideShow/SlideShow';
import Infinite from './components/Infinite/Infinite';
import './App.css';

export const App = (props) => {
  const {
    errorMessage, images, isFetchingImages, isFetchingNextImages,
  } = props;
  if (errorMessage) {
    return (
      <section className="collection">
        <SearchForm fetchImages={props.fetchImages} />
        <p className="error-empty">{errorMessage}</p>
      </section>
    );
  } else if (isFetchingImages) {
    return (
      <section className="collection">
        <SearchForm fetchImages={props.fetchImages} />
        <div className="loader loader-fullscreen">
          <div className="loader__spin" />
        </div>
      </section>
    );
  } return (
    <section className="collection">
      <SearchForm fetchImages={props.fetchImages} />
      {images.length !== 0 &&
      <Infinite nextImages={props.fetchNextImages} isFetching={isFetchingNextImages}>
        <Images images={images} onClick={props.onClickImage} />
        <Preview />
      </Infinite>
      }
    </section>
  );
};

App.propTypes = {
  errorMessage: PropTypes.string,
  isFetchingImages: PropTypes.bool,
  isFetchingNextImages: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.object),
  fetchImages: PropTypes.func.isRequired,
  fetchNextImages: PropTypes.func.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

App.defaultProps = {
  errorMessage: '',
  isFetchingImages: false,
  isFetchingNextImages: false,
  images: [],
};

export default connect(
  state => ({
    isFetchingImages: state.searchReducer.isFetchingImages,
    images: state.searchReducer.images.value,
    errorMessage: state.searchReducer.errorMessage,
    isFetchingNextImages: state.searchReducer.isFetchingNextImages,
  }),
  dispatch => ({
    fetchImages: searchValue => dispatch(fetchImages(searchValue)),
    fetchNextImages: () => dispatch(fetchNextImages()),
    onClickImage: id => dispatch(onClickImage(id)),
  }),
)(App);
