import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchImages, fetchNextImages } from './actions/search';
import { onClickImage } from './actions/slideShow';
import SearchForm from './components/SearchForm/SearchForm';
import Images from './components/Images/Images';
import SlideShow from './components/SlideShow/SlideShow';
import Infinite from './components/Infinite/Infinite';
import './App.css';

const App = (props) => {
  const {
    errorMessage, images, isFetchingImages, isFetchingNextImages,
  } = props;
  return (
    <section className="collection">
      <SearchForm fetchImages={props.fetchImages} />
      {
        errorMessage &&
        <p className="error-empty">{errorMessage}</p>
      }
      {
        isFetchingImages &&
        <div className="loader loader-fullscreen">
          <div className="loader__spin" />
        </div>
      }
      {
        !errorMessage && !isFetchingImages &&
          <Infinite nextImages={props.fetchNextImages} isFetching={isFetchingNextImages}>
            <Images images={images} onClick={props.onClickImage} />
            <SlideShow />
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
