
import { useSelector, useDispatch } from 'react-redux';

import * as RootNavigation from '../../navigation/RootNavigation';
import { removeArt } from '../../redux/actions/artAction';

const SavedModel = () => {
  const dispatch = useDispatch();
  const { savedArt } = useSelector(state => state.artReducer);
  const removeDataArt = (params) => dispatch(removeArt(params));
  const goToDetailPage = (params) => RootNavigation.navigate('Detail', params);
  return {
    savedArt,
    removeDataArt,
    goToDetailPage
  };
};

export default SavedModel;
