const defaultState = {
  pagination: {},
  arts: [],
  detailArt: {},
  savedArt: [],
  isSearch: false,
  searchedData: {},
  isLoading: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_ART_REQUEST': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ART_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        pagination: action.payload.pagination,
        arts: [
          state.savedArt.filter(art => art.id !== action.payload.data.id),
          ...state.arts,
        ],
      };
    }
    case 'GET_ART_FAIL': {
      return {
        ...state,
        isLoading: false,
      };
    }
    case 'GET_DETAIL_ART_REQUEST': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DETAIL_ART_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        detailArt: action.payload,
      };
    }
    case 'GET_DETAIL_ART_FAIL': {
      return {
        ...state,
        isLoading: false,
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
      return {
        ...state,
        savedArt: state.savedArt.filter(art => art.id !== action.payload.id),
      };
    }

    case 'SEARCH_DATA_ART_SUCCESS': {
      return {
        ...state,
        pagination: action.payload.pagination,
        arts: action.payload.data,
      };
    }

    default:
      return state;
  }
};
