import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import BlankScreen from '../screens/BlankScreen';

import MainContentSkeleton from './MainContentSkeleton';

const { width, height } = Dimensions.get('window');

const MainContent = ({ navigation, data, refresh, fetchMore }) => {
  const { initialLoading, isLoading } = useSelector(state => state.artReducer);
  const MemoizedValue = memo(({ item }) => {
    return <RenderItem item={item} />;
  });
  const handleNavigation = (item) => {
    navigation.navigate('Detail', { id: `${item.id}` });
  };

  const RenderItem = ({ item }) => (
    <TouchableOpacity
      testID="navigateToDetail"
      onPress={handleNavigation}>
      {item.image_id ? (
        <Image
          style={styles.card}
          source={{
            uri:
              'https://www.artic.edu/iiif/2/' +
              item.image_id +
              '/full/843,/0/default.jpg'
          }} />
      ) : (
        <Image
          style={styles.card}
          source={require('../assets/images/placeholder-image.jpg')} />
      )}
    </TouchableOpacity>
  );

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  if (data.length <= 0 && !initialLoading && !isLoading) {
    return (
      <ScrollView
        refreshControl={refresh}
        style={{ flex: 1, backgroundColor: '#fff' }}>
        <BlankScreen style={{ width: width, height: height }} />
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.container}>
        {initialLoading ? (
          <MainContentSkeleton refresh={refresh} />
        ) : (
          <FlatList
            data={data}
            refreshControl={refresh}
            renderItem={({ item }) => <MemoizedValue item={item} />}
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
    alignItems: 'flex-start'
  },
  card: {
    backgroundColor: '#EEE',
    width: width * 0.327,
    height: width * 0.327,
    marginHorizontal: width * 0.003,
    marginBottom: width * 0.006,
    resizeMode: 'cover'
  }
});
