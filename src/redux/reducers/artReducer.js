const defaultState = {
  pagination: {},
  arts: [],
  detailArt: {},
  savedArt: [],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_ART_SUCCESS': {
      console.log('Payload => ', action.payload);
      return {
        ...state,
        pagination: action.payload.pagination,
        arts: [...state.arts, ...action.payload.data],
      };
    }

    case 'GET_DETAIL_ART_SUCCESS': {
      return {
        ...state,
        isLoading: true,
        detailArt: action.payload,
      };
    }

    case 'CLEAR_SELECTED_ART': {
      return {
        ...state,
        detailArt: {},
      };
    }

    case 'SAVE_ART': {
      return {
        ...state,
        savedArt: [...state.savedArt, action.payload],
      };
    }

    case 'REMOVE_ART': {
      console.log('Remove => ', action.payload.id);
      return {
        ...state,
        savedArt: state.savedArt.filter(art => art.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
