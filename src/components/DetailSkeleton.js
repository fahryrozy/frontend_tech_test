import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');

const DetailSkeleton = () => {
  return (
    <ScrollView style={styles.container}>
      <SkeletonPlaceholder>
        <View style={styles.header} />
      </SkeletonPlaceholder>
      <View style={styles.content}>
        <SkeletonPlaceholder>
          <View style={styles.thumbnail} />
        </SkeletonPlaceholder>
        <View style={styles.panel}>
          <MaterialIcons name={'favorite-border'} size={30} color={'#000'} />
          <SkeletonPlaceholder>
            <View style={styles.credit} />
          </SkeletonPlaceholder>
          <View>
            <Text />
          </View>
        </View>

        <View>
          <Text style={styles.label}>Inscriptions</Text>
        </View>
        <SkeletonPlaceholder>
          <View style={styles.infoSkeleton} />
        </SkeletonPlaceholder>

        <View>
          <Text style={styles.label}>Provenance Text</Text>
        </View>
        <SkeletonPlaceholder>
          <View style={styles.infoSkeleton} />
        </SkeletonPlaceholder>

        <View>
          <Text style={styles.label}>Publication History</Text>
        </View>
        <SkeletonPlaceholder>
          <View style={styles.infoSkeleton} />
        </SkeletonPlaceholder>

        <View>
          <Text style={styles.label}>Exhibition History</Text>
        </View>
        <SkeletonPlaceholder>
          <View style={styles.infoSkeleton} />
        </SkeletonPlaceholder>
      </View>
    </ScrollView>
  );
};

export default DetailSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: width,
    height: 40
  },
  title: {
    fontSize: 20
  },
  content: {
    marginTop: 10,
    paddingHorizontal: width * 0.05
  },
  thumbnail: {
    width: width * 0.9,
    height: width * 0.9
  },
  panel: {
    minHeight: height * 0.1,
    paddingVertical: 5
  },
  credit: {
    width: '100%',
    height: height * 0.035
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5
  },
  infoSkeleton: {
    width: '100%',
    height: height * 0.035,
    marginBottom: 5
  }
});
