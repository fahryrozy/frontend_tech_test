import {
  Alert,
  View,
  TouchableWithoutFeedback,
  RefreshControl,
  BackHandler
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';
import { getAll, reloadData } from '../redux/actions/artAction';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = React.useState(false);
  const { arts, isLoading, pagination } = useSelector(state => state.artReducer);
  const handleNavigation = () => {
    navigation.navigate('Search', {});
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

  useEffect(() => {
    dispatch(getAll(page));
  }, [page]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);


  const backAction = () => {
    if (!navigation.canGoBack()) {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel'
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={{ flex: 1 }}>
          <SearchBar isEnabled={false} />
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flex: 7 }}>
        <MainContent
          navigation={navigation}
          data={arts}
          refresh={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          fetchMore={fetchMoreArts}
        />
      </View>
    </View>
  );
};

export default Home;
