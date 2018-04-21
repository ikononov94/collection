import * as actionTypes from '../actions/slideShow';

export default (state = { index: null, loadingImage: false, errorMessage: '' }, action) => {
  switch (action.type) {
    case actionTypes.SHOW_IMAGE:
      return {
        ...state,
        index: action.index,
        loadingImage: true,
      };
    case actionTypes.HIDE_IMAGE:
      return {
        ...state,
        index: null,
      };
    case actionTypes.NEXT_IMAGE:
      return {
        ...state,
        index: action.index,
        loadingImage: action.loading,
      };
    case actionTypes.PREV_IMAGE:
      return {
        ...state,
        index: action.index,
        loadingImage: action.loading,
      };
    case actionTypes.LOADED_IMAGE:
      return {
        ...state,
        loadingImage: false,
      };
    case actionTypes.ERROR_LOADED_IMAGE:
      return {
        ...state,
        loadingImage: false,
      };
    default:
      return state;
  }
};
