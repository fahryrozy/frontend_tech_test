import { StyleSheet, Image, View, Dimensions } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('window');

const ArtImageGrid = ({ image_id }) => {
  return (
    <View style={styles.photoContainer}>
      {image_id !== null ? (
        <Image
          style={styles.card}
          source={{
            uri:
                'https://www.artic.edu/iiif/2/' +
                image_id +
                '/full/843,/0/default.jpg',
            cache: 'only-if-cached'
          }}
        />
      ) : (
        <Image
          style={styles.thumbnail}
          source={require('../assets/images/placeholder-image.jpg')}
        />
      )}
    </View>
  );
};

export default ArtImageGrid;

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
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
