import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ViewMoreText from 'react-native-view-more-text';

import { removeArt } from '../redux/actions/artAction';
import { renderViewMore, renderViewLess } from '../utils/viewmore';

import BlankScreen from './BlankScreen';

const { width, height } = Dimensions.get('window');

const Saved = ({ navigation }) => {
  const dispatch = useDispatch();
  const { savedArt } = useSelector(state => state.artReducer);
  const renderContent = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', { id: `${item.id}` });
        }}>
        <View style={styles.photoContainer}>
          {item.image_id ? (
            <Image
              style={styles.thumbnail}
              source={{
                uri:
                  'https://www.artic.edu/iiif/2/' +
                  item.image_id +
                  '/full/843,/0/default.jpg',
                cache: 'only-if-cached'
              }} />
          ) : (
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/placeholder-image.jpg')} />
          )}
          <View style={styles.panel}>
            <View style={styles.header}>
              <ViewMoreText
                numberOfLines={2}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}>
                <Text style={styles.title}>{item.title}</Text>
              </ViewMoreText>
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
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}>
              <Text>
                {item.inscriptions ?
                  item.inscriptions
                  : 'There is no description here'}
              </Text>
            </ViewMoreText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (savedArt.length <= 0) {
    return <BlankScreen />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={savedArt}
          renderItem={renderContent}
          style={styles.content}
        />
      </SafeAreaView>
    );
  }
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    flex: 4,
    backgroundColor: '550'
  },
  title: {
    fontSize: 20,
    height: height * 0.2
  },
  action: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  content: {
    flex: 1,
    paddingHorizontal: width * 0.025
  },
  photoContainer: {
    paddingVertical: 20,
    backgroundColor: '#EEE',
    marginVertical: 5,
    paddingHorizontal: width * 0.05,
    width: width * 0.95,
    alignItems: 'center',
    borderRadius: width * 0.025
  },
  thumbnail: {
    width: width * 0.85,
    height: width * 0.85
  },
  panel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: height * 0.1,
    paddingVertical: 1
  },
  description: {
    paddingVertical: 1,
    width: '100%'
  },
  label: {
    fontSize: 18,
    fontWeight: '700'
  }
});
