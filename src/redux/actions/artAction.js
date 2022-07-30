import {
  getData,
  getDetailData,
  searchDataArt
} from '../../hooks/apiRequest/articAPI';

export const getAll = page => {
  return async dispatch => {
    dispatch({
      type: 'GET_ART_REQUEST'
    });

    try {
      const result = await getData(page);
      if (result.status === 200) {
        dispatch({
          type: 'GET_ART_SUCCESS',
          payload: {
            pagination: result.data.pagination,
            data: result.data.data.map(item => ({
              id: item.id,
              image_id: item.image_id
            }))
          }
        });
      } else {
        dispatch({
          type: 'GET_ART_FAILED',
          error: result
        });
      }
    } catch (err) {
      dispatch({
        type: 'GET_ART_FAILED',
        error: err
      });
    }
  };
};

export const reloadData = page => {
  return async dispatch => {
    dispatch({
      type: 'RELOAD_ART_REQUEST'
    });

    try {
      const result = await getData(page);
      if (result.status === 200) {
        dispatch({
          type: 'RELOAD_ART_SUCCESS',
          payload: {
            pagination: result.data.pagination,
            data: result.data.data.map(item => ({
              id: item.id,
              image_id: item.image_id
            }))
          }
        });
      } else {
        dispatch({
          type: 'RELOAD_ART_FAILED',
          error: result
        });
      }
    } catch (err) {
      dispatch({
        type: 'RELOAD_ART_FAILED',
        error: err
      });
    }
  };
};

export const getDetail = id => {
  return async dispatch => {
    dispatch({
      type: 'GET_DETAIL_ART_REQUEST'
    });

    try {
      const result = await getDetailData(id);
      if (result.status === 200) {
        dispatch({
          type: 'GET_DETAIL_ART_SUCCESS',
          payload: result.data.data
        });
      } else {
        dispatch({
          type: 'GET_DETAIL_ART_FAILED',
          error: result
        });
      }
    } catch (err) {
      dispatch({
        type: 'GET_DETAIL_ART_FAILED',
        error: err
      });
    }
  };
};

export const clearSelected = () => {
  return async dispatch => {
    dispatch({
      type: 'CLEAR_SELECTED_ART'
    });
  };
};

export const saveArt = art => {
  return async dispatch => {
    dispatch({
      type: 'SAVE_ART',
      payload: art
    });
  };
};

export const removeArt = art => {
  return async dispatch => {
    dispatch({
      type: 'REMOVE_ART',
      payload: art
    });
  };
};

export const searchData = query => {
  return async dispatch => {
    dispatch({
      type: 'SEARCH_DATA_ART_REQUEST'
    });

    try {
      const result = await searchDataArt(query);
      if (result.status === 200) {
        dispatch({
          type: 'SEARCH_DATA_ART_SUCCESS',
          payload: {
            query,
            pagination: result.data.pagination,
            data: result.data.data.map(item => ({
              id: item.id,
              image_id: item.image_id
            }))
          }
        });
      } else {
        dispatch({
          type: 'SEARCH_DATA_ART_FAILED',
          error: result
        });
      }
    } catch (err) {
      dispatch({
        type: 'SEARCH_DATA_ART_FAILED',
        error: err
      });
    }
  };
};

export const removeKeyword = keyword => {
  return async dispatch => {
    dispatch({
      type: 'REMOVE_KEYWORD',
      payload: keyword
    });
  };
};

export const clearKeyword = () => {
  return async dispatch => {
    dispatch({
      type: 'CLEAR_KEYWORD'
    });
  };
};
