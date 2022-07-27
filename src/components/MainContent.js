import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import MainContentSkeleton from './MainContentSkeleton';
import BlankScreen from '../screens/BlankScreen';

const {width, height} = Dimensions.get('window');

const MainContent = ({navigation, data, refresh, fetchMore}) => {
  const initialLoading = useSelector(state => state.artReducer.initialLoading);
  const isLoading = useSelector(state => state.artReducer.isLoading);
  const MemoizedValue = memo(({item}) => {
    return <RenderItem item={item}></RenderItem>;
  });

  const RenderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {id: `${item.id}`});
      }}>
      <Image
        style={styles.card}
        source={{
          uri:
            `https://www.artic.edu/iiif/2/` +
            item.image_id +
            `/full/843,/0/default.jpg`,
        }}></Image>
    </TouchableOpacity>
  );

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  if (data.length <= 0) {
    return <BlankScreen />;
  } else {
    return (
      <View style={styles.container}>
        {initialLoading == true ? (
          <MainContentSkeleton refresh={refresh} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={refresh}
            renderItem={({item}) => <MemoizedValue item={item} />}
            numColumns={3}
            onEndReachedThreshold={0.4}
            onEndReached={fetchMore}
            ListFooterComponent={renderLoader}
          />
        )}
      </View>
    );
  }
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
