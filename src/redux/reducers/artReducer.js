const defaultState = {
  pagination: {},
  arts: [],
  detailArt: {},
  savedArt: [],
  isSearch: false,
  searchedKeyword: [],
  isLoading: false,
  initialLoading: true
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_ART_REQUEST':
    case 'GET_DETAIL_ART_REQUEST': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'GET_ART_SUCCESS': {
      const intersection = action.payload.data.filter(
        payload => !state.arts.some(base => payload.id === base.id),
      );
      return {
        ...state,
        isLoading: false,
        initialLoading: false,
        pagination: action.payload.pagination,
        arts: [...state.arts, ...intersection]
      };
    }
    case 'GET_ART_FAIL':
    case 'RELOAD_ART_FAIL': {
      return {
        ...state,
        isLoading: false
      };
    }
    case 'RELOAD_ART_REQUEST':
    case 'SEARCH_DATA_ART_REQUEST': {
      return {
        ...state,
        isLoading: true,
        initialLoading: true
      };
    }
    case 'RELOAD_ART_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        initialLoading: false,
        pagination: action.payload.pagination,
        arts: action.payload.data
      };
    }
    case 'GET_DETAIL_ART_SUCCESS':
    case 'GET_DETAIL_ART_FAIL': {
      return {
        ...state,
        isLoading: false,
        detailArt: action.payload
      };
    }
    case 'CLEAR_SELECTED_ART': {
      return {
        ...state,
        detailArt: {}
      };
    }

    case 'SAVE_ART': {
      return {
        ...state,
        savedArt: [...state.savedArt, action.payload]
      };
    }

    case 'REMOVE_ART': {
      return {
        ...state,
        savedArt: state.savedArt.filter(art => art.id !== action.payload.id)
      };
    }

    case 'SEARCH_DATA_ART_SUCCESS': {
      if (!state.searchedKeyword.includes(action.payload.query.toLowerCase())) {
        state.searchedKeyword.unshift(action.payload.query.toLowerCase());
      } else {
        state.searchedKeyword = state.searchedKeyword.filter(
          e => e !== action.payload.query.toLowerCase(),
        );
        state.searchedKeyword.unshift(action.payload.query.toLowerCase());
      }
      return {
        ...state,
        isLoading: false,
        initialLoading: false,
        pagination: action.payload.pagination,
        arts: action.payload.data
      };
    }
    case 'SEARCH_DATA_ART_REQUEST': {
      return {
        ...state,
        isLoading: false,
        initialLoading: false
      };
    }

    case 'REMOVE_KEYWORD': {
      state.searchedKeyword = state.searchedKeyword.filter(
        e => e !== action.payload.toLowerCase(),
      );
      return {
        ...state
      };
    }

    case 'CLEAR_KEYWORD': {
      return {
        ...state,
        searchedKeyword: []
      };
    }

    default:
      return state;
  }
};
