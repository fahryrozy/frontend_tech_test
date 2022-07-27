import {
  View,
  TouchableWithoutFeedback,
  RefreshControl,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';
import {useSelector, useDispatch} from 'react-redux';
import {getAll, reloadData} from '../redux/actions/artAction';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const arts = useSelector(state => state.artReducer.arts);
  const isLoading = useSelector(state => state.artReducer.isLoading);
  const pagination = useSelector(state => state.artReducer.pagination);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

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
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    dispatch(getAll(page));
  }, [page]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(reloadData(page));
    if (!isLoading) {
      setRefreshing(false);
    }
  };

  const fetchMoreArts = () => {
    if (pagination.current_page < pagination.total_pages) {
      setPage(page + 1);
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Search', {});
        }}>
        <View style={{flex: 1}}>
          <SearchBar isEnabled={false} />
        </View>
      </TouchableWithoutFeedback>
      <View style={{flex: 7}}>
        <MainContent
          navigation={navigation}
          data={arts}
          refresh={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          fetchMore={fetchMoreArts}
        />
      </View>
    </View>
  );
};

export default Home;
