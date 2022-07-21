import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAll} from '../redux/actions/artAction';
const {width, height} = Dimensions.get('window');

const MainContent = ({navigation}) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const arts = useSelector(state => state.artReducer.arts);
  const pagination = useSelector(state => state.artReducer.pagination);

  const fetchMoreArts = () => {
    console.log('End Reached ', page);
    if (pagination.current_page < pagination.total_pages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(getAll(page));
    // if (Object.keys(arts).length > 0) {
    //   console.log('Test 2 => ', arts);
    // }
  }, [page]);
  return (
    <View style={styles.container}>
      {Object.keys(arts).length > 0 && (
        <FlatList
          data={arts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            if (
              item !== null &&
              item.thumbnail !== null &&
              Object.keys(item.thumbnail).length > 1
            ) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Detail', {id: `${item.id}`});
                  }}>
                  <Image
                    style={styles.card}
                    source={{uri: item.thumbnail.lqip}}></Image>
                </TouchableOpacity>
              );
            }
          }}
          numColumns={3}
          onEndReachedThreshold={0.4}
          onEndReached={fetchMoreArts}
        />
      )}
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: '#EEE',
    width: width * 0.327,
    height: width * 0.327,
    marginHorizontal: width * 0.003,
    marginBottom: width * 0.006,
    resizeMode: 'cover',
  },
});
