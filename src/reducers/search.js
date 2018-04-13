import * as actionTypes from '../actions/search';

export default (state = {
  searchValue: '',
  images: {},
  isFetchingImages: false,
  isFetchingNextImages: false,
  errorMessage: '',
}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGES_START:
      return {
        ...state,
        searchValue: action.searchValue,
        isFetchingImages: true,
      };
    case actionTypes.FETCH_NEXT_IMAGES_START:
      return {
        ...state,
        isFetchingNextImages: true,
      };
    case actionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        images: action.images,
      };
    case actionTypes.FETCH_NEXT_IMAGES_SUCCESS:
      return {
        ...state,
        images: {
          ...state.images,
          ...action.images,
          value: [
            ...state.images.value,
            ...action.images.value,
          ],
        },
        errorMessage: '',
      };
    case actionTypes.FETCH_IMAGES_ERROR:
    case actionTypes.FETCH_NEXT_IMAGES_ERROR:
      return {
        ...state,
        images: {},
        searchValue: '',
        errorMessage: action.errorMessage,
      };
    case actionTypes.FETCH_IMAGES_END:
      return {
        ...state,
        isFetchingImages: false,
      };
    case actionTypes.FETCH_NEXT_IMAGES_END:
      return {
        ...state,
        isFetchingNextImages: false,
      };
    default:
      return state;
  }
};
