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
          <>
            {Object.keys(item).length > 0 &&
              Object.keys(item.thumbnail).length > 0 &&
              item.thumbnail.lqip && (
                <View style={styles.photoContainer}>
                  <Image
                    style={styles.thumbnail}
                    source={{uri: item.thumbnail.lqip}}></Image>
                </View>
              )}
            <View style={styles.panel}>
              <View style={styles.header}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.action}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(saveArt(item));
                  }}>
                  <MaterialIcons name="favorite" size={30} color="#900" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeArt(item));
                  }}>
                  <FontAwesome name="trash" size={30} color="#900" />
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
          </>
        )}
        style={styles.content}
      />
      <Text>sad</Text>
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
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: width * 0.05,
  },
  thumbnail: {
    width: width * 0.9,
    height: width * 0.9,
  },
  panel: {
    flexDirection: 'row',
    height: 30,
    paddingVertical: 1,
  },
  description: {
    paddingVertical: 1,
    marginBottom: 50,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    // paddingVertical: 1,
  },
});
