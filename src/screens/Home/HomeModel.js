
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as RootNavigation from '../../navigation/RootNavigation';
import { getAll, reloadData } from '../../redux/actions/artAction';

const HomeModel = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const [refreshing, setRefreshing] = React.useState(false);
  const { arts, isLoading, pagination } = useSelector(state => state.artReducer);

  const getDataArt = async () => dispatch(getAll(page));

  const handleNavigation = () => {
    RootNavigation.navigate('Search', {});
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(reloadData(1));

    if (!isLoading) {
      setPage(1);
      setRefreshing(false);
    }
  };

  const fetchMoreArts = () => {
    if (pagination.current_page < pagination.total_pages) {
      setPage(page + 1);
    }
  };

  const goToDetailPage = params =>RootNavigation.navigate('Detail', params);

  return {
    arts,
    refreshing,
    getDataArt,
    handleNavigation,
    onRefresh,
    page,
    fetchMoreArts,
    goToDetailPage
  };
};

export default HomeModel;
