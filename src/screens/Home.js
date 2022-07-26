import {View, TouchableWithoutFeedback, RefreshControl} from 'react-native';
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

  const refreshHandler = () => (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll(page));
    console.log('Fetching Data');
  }, [page]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(reloadData(page));
    console.log('reloading');
    if (!isLoading) {
      setRefreshing(false);
    }
  };

  const fetchMoreArts = () => {
    if (pagination.current_page < pagination.total_pages) {
      setPage(page + 1);
      console.log('Page => ', page);
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
