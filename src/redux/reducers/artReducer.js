const defaultState = {
  pagination: {},
  arts: [],
  detailArt: {},
  savedArt: [],
  isSearch: false,
  searchedData: {},
  isLoading: false,
  initialLoading: true,
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
      // const test = action.payload.data.filter(item => {
      //   return !this.has(item);
      // }, new Set(state.arts));
      // console.log('Data -> ', test);
      const intersection = action.payload.data.filter(
        payload => !state.arts.some(base => payload.id === base.id),
      );
      return {
        ...state,
        isLoading: false,
        initialLoading: false,
        pagination: action.payload.pagination,
        arts: [...state.arts, ...intersection],
      };
    }
    case 'GET_ART_FAIL': {
      return {
        ...state,
        isLoading: false,
      };
    }
    case 'RELOAD_ART_REQUEST': {
      return {
        ...state,
        isLoading: true,
        initialLoading: true,
      };
    }
    case 'RELOAD_ART_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        initialLoading: false,
        pagination: action.payload.pagination,
        arts: action.payload.data,
      };
    }
    case 'RELOAD_ART_FAIL': {
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
