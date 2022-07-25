import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeArt, getDetail, saveArt} from '../redux/actions/artAction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const Saved = () => {
  const dispatch = useDispatch();
  const savedArt = useSelector(state => state.artReducer.savedArt);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={savedArt}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.photoContainer}>
            {Object.keys(item).length > 0 &&
              Object.keys(item.image_id).length > 0 && (
                <Image
                  style={styles.thumbnail}
                  source={{
                    uri:
                      `https://www.artic.edu/iiif/2/` +
                      item.image_id +
                      `/full/843,/0/default.jpg`,
                  }}></Image>
              )}
            <View style={styles.panel}>
              <View style={styles.header}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.action}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeArt(item));
                  }}>
                  <FontAwesome name="trash" size={25} color="#900" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.description}>
              <Text style={styles.label}>Inscriptions</Text>
              <Text>
                {item.inscriptions
                  ? item.inscriptions
                  : 'There is no description here'}
              </Text>
            </View>
          </View>
        )}
        style={styles.content}
      />
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    flex: 4,
  },
  title: {
    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {},
  photoContainer: {
    paddingVertical: 20,
    backgroundColor: '#EEE',
    marginVertical: 5,
    paddingHorizontal: width * 0.05,
    width: width * 0.95,
    alignItems: 'center',
    borderRadius: width * 0.025,
  },
  thumbnail: {
    width: width * 0.85,
    height: width * 0.85,
  },
  panel: {
    flexDirection: 'row',
    height: 30,
    paddingVertical: 1,
  },
  description: {
    paddingVertical: 1,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
});
