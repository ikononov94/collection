export const FETCH_IMAGES_START = 'FETCH_IMAGES_START';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';
export const FETCH_IMAGES_END = 'FETCH_IMAGES_END';

export const fetchImages = searchValue =>
  async (dispatch, getState) => {
    if (!searchValue) {
      dispatch({
        type: FETCH_IMAGES_ERROR,
        errorMessage: 'Задан пустой поисковый запрос',
      });
      return;
    } else if (searchValue === getState().searchReducer.searchValue) return;

    dispatch({
      type: FETCH_IMAGES_START,
      searchValue,
    });

    try {
      const response = await fetch(
        `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchValue}&count=33`,
        { headers: { 'Ocp-Apim-Subscription-Key': '76ae7c9307e5415ebfd65df1fefe4e18' } },
      );
      const images = await response.json();

      if (images.value.length === 0) {
        dispatch({
          type: FETCH_IMAGES_ERROR,
          errorMessage: 'По вашему запросу ничего не найдено',
        });
        return;
      }

      dispatch({
        type: FETCH_IMAGES_SUCCESS,
        images,
      });
    } catch (error) {
      dispatch({
        type: FETCH_IMAGES_ERROR,
        errorMessage: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_IMAGES_END,
      });
    }
  };

export const FETCH_NEXT_IMAGES_START = 'FETCH_NEXT_IMAGES_START';
export const FETCH_NEXT_IMAGES_SUCCESS = 'FETCH_NEXT_IMAGES_SUCCESS';
export const FETCH_NEXT_IMAGES_ERROR = 'FETCH_NEXT_IMAGES_ERROR';
export const FETCH_NEXT_IMAGES_END = 'FETCH_NEXT_IMAGES_END';

export const fetchNextImages = () =>
  async (dispatch, getState) => {
    if (getState().searchReducer.images.value.length >= 150) return;
    dispatch({
      type: FETCH_NEXT_IMAGES_START,
    });

    try {
      const { searchValue, images } = getState().searchReducer;
      const response = await fetch(
        `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=
          ${searchValue}&count=33&offset=${images.nextOffset}`,
        { headers: { 'Ocp-Apim-Subscription-Key': '76ae7c9307e5415ebfd65df1fefe4e18' } },
      );
      const nextImages = await response.json();

      dispatch({
        type: FETCH_NEXT_IMAGES_SUCCESS,
        images: nextImages,
      });
    } catch (error) {
      dispatch({
        type: FETCH_NEXT_IMAGES_ERROR,
        errorMessage: error.message,
      });
    } finally {
      dispatch({
        type: FETCH_NEXT_IMAGES_END,
      });
    }
  };
