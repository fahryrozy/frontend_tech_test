import { StyleSheet, Image, View, Dimensions } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('window');

const ArtImage = ({ image_id }) => {
  return (
    <View style={styles.photoContainer}>
      {image_id !== null ? (
        <Image
          style={styles.thumbnail}
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

export default ArtImage;

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    width: width * 0.9,
    height: width * 0.9
  }
});
