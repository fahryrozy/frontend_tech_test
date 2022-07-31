import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import BlankScreen from '../screens/BlankScreen';

import MainContentSkeleton from './MainContentSkeleton';
import ArtImageGrid from './ArtImageGrid';

const { width, height } = Dimensions.get('window');

const MainContent = ({ nav, data, refresh, fetchMore }) => {
  const { initialLoading, isLoading } = useSelector(state => state.artReducer);
  const MemoizedValue = memo(({ item }) => {
    return <RenderItem item={item} />;
  });

  const RenderItem = ({ item }) => (
    <TouchableOpacity onPress={()=> nav({ id: item.id })}>
      <ArtImageGrid image_id={item.image_id} />
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
  }
});
