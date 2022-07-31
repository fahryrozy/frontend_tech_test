
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  clearSelected,
  getDetail,
  removeArt,
  saveArt
} from '../../redux/actions/artAction';
import * as RootNavigation from '../../navigation/RootNavigation';

const DetailModel = () => {
  const dispatch = useDispatch();
  const likeIndicator = useSharedValue(0);
  const [isLiked, setIsLiked] = useState(false);
  const { detailArt, isLoading, savedArt } = useSelector(state => state.artReducer);

  const likeHandler = () => {
    dispatch(saveArt(detailArt));
    likeIndicator.value = withSpring(likeIndicator.value ? 0 : 1);
    setIsLiked(!isLiked);
  };

  const dislikeHandler = () => {
    dispatch(removeArt(detailArt));
    likeIndicator.value = withSpring(likeIndicator.value ? 0 : 1);
    setIsLiked(!isLiked);
  };

  const getDetailData = id => dispatch(getDetail(id));
  const clearSelectedData = () => dispatch(clearSelected());
  const backToHome = () => {
    RootNavigation.pop();
    clearSelectedData();
  };
  return {
    likeIndicator,
    isLiked,
    setIsLiked,
    getDetailData,
    savedArt,
    detailArt,
    clearSelectedData,
    likeHandler,
    dislikeHandler,
    isLoading,
    backToHome
  };
};

export default DetailModel;
