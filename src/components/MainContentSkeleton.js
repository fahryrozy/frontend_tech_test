import { StyleSheet, Dimensions, View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const { width } = Dimensions.get('window');

const MainContentSkeleton = ({ refresh }) => {
  const Refresh = () => refresh;
  return (
    <>
      <Refresh />
      <SkeletonPlaceholder>
        <View
          style={styles.row}>
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
        </View>
        <View
          style={styles.row}>
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
        </View>
        <View
          style={styles.row}>
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
        </View>
        <View
          style={styles.row}>
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
        </View>
        <View
          style={styles.row}>
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
          <View style={styles.cardskeleton} />
        </View>
      </SkeletonPlaceholder>
    </>
  );
};

export default MainContentSkeleton;

const styles = StyleSheet.create({
  cardskeleton: {
    backgroundColor: '#E0E',
    width: width * 0.327,
    height: width * 0.327,
    marginHorizontal: width * 0.003,
    marginBottom: width * 0.006,
    resizeMode: 'cover'
  },
  row: {
    flexDirection: 'row'
  }
});
