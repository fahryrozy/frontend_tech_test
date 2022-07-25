import {StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const {width, height} = Dimensions.get('window');

const MainContentSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
        <View style={styles.cardskeleton}></View>
      </View>
    </SkeletonPlaceholder>
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
    resizeMode: 'cover',
  },
});
