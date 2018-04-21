export const SHOW_IMAGE = 'SHOW_IMAGE';
export const HIDE_IMAGE = 'HIDE_IMAGE';
export const NEXT_IMAGE = 'NEXT_IMAGE';
export const PREV_IMAGE = 'PREV_IMAGE';
export const LOADED_IMAGE = 'LOADED_IMAGE';
export const ERROR_LOADED_IMAGE = 'ERROR_LOADED_IMAGE';

export const onClickImage = imageId => (dispatch, getState) => {
  getState().searchReducer.images.value.forEach((currentValue, currentIndex) => {
    if (currentValue.imageId === imageId) {
      dispatch({
        type: SHOW_IMAGE,
        index: currentIndex,
      });
    }
  });
};

export const onCloseImage = () => (dispatch) => {
  dispatch({
    type: HIDE_IMAGE,
  });
};

export const nextImage = () => (dispatch, getState) => {
  const { searchReducer, slideShowReducer } = getState();
  const nextIndex = slideShowReducer.index >= searchReducer.images.value.length - 1 ?
    searchReducer.images.value.length - 1 :
    slideShowReducer.index + 1;
  const loadingNextImage = !(slideShowReducer.index >= searchReducer.images.value.length - 1);

  dispatch({
    type: NEXT_IMAGE,
    index: nextIndex,
    loading: loadingNextImage,
  });
};

export const prevImage = () => (dispatch, getState) => {
  const { slideShowReducer } = getState();
  const nextIndex = slideShowReducer.index <= 0 ? 0 : slideShowReducer.index - 1;
  const loadingPrevImage = !(slideShowReducer.index <= 0);

  dispatch({
    type: PREV_IMAGE,
    index: nextIndex,
    loading: loadingPrevImage,
  });
};

export const loadedImage = () => (dispatch) => {
  dispatch({
    type: LOADED_IMAGE,
  });
};

export const errorLoadedImage = () => (dispatch) => {
  dispatch({
    type: ERROR_LOADED_IMAGE,
  });
};
