
import { useSelector, useDispatch } from 'react-redux';

import {
  clearKeyword,
  removeKeyword,
  searchData
} from '../../redux/actions/artAction';
import * as RootNavigation from '../../navigation/RootNavigation';

const SearchModel = () => {
  const dispatch = useDispatch();
  const { searchedKeyword } = useSelector(state => state.artReducer);
  const searchDataArt = query => dispatch(searchData(query));
  const clearSearchKeyword = () => dispatch(clearKeyword());
  const removeSearchKeyword = (query) => dispatch(removeKeyword(query));
  const selectKeywordToSearch = (query) => {
    searchDataArt(query);
    RootNavigation.navigate('Home', {});
  };
  return {
    searchedKeyword,
    searchDataArt,
    clearSearchKeyword,
    removeSearchKeyword,
    selectKeywordToSearch
  };
};

export default SearchModel;
