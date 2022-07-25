import {View, TouchableWithoutFeedback, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';
import {useSelector, useDispatch} from 'react-redux';
import {getAll} from '../redux/actions/artAction';

const Home = ({navigation}) => {
  const arts = useSelector(state => state.artReducer.arts);
  const pagination = useSelector(state => state.artReducer.pagination);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll(page));
  }, [page]);

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
          fetchMore={fetchMoreArts}
        />
      </View>
    </View>
  );
};

export default Home;
