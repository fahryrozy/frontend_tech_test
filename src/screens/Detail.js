import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clearSelected, getDetail, saveArt} from '../redux/actions/artAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const Detail = navigation => {
  const dispatch = useDispatch();
  const {id} = navigation.route.params;
  const detailArt = useSelector(state => state.artReducer.detailArt);
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  return (
    <View style={styles.container}>
      {detailArt.title !== null && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigation.goBack();
              dispatch(clearSelected());
            }}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>{detailArt.title}</Text>
        </View>
      )}
      <ScrollView style={styles.content}>
        {Object.keys(detailArt).length > 0 &&
          Object.keys(detailArt.thumbnail).length > 0 &&
          detailArt.thumbnail.lqip && (
            <View style={styles.photoContainer}>
              <Image
                style={styles.thumbnail}
                source={{uri: detailArt.thumbnail.lqip}}></Image>
            </View>
          )}
        <View style={styles.panel}>
          <TouchableOpacity
            onPress={() => {
              dispatch(saveArt(detailArt));
            }}>
            <MaterialIcons name="favorite-border" size={30} color="#000" />
          </TouchableOpacity>
          <View style={styles.credit}>
            <Text>Credit : {detailArt.credit_line}</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Inscriptions</Text>
        </View>
        <View>
          <Text>
            {detailArt.inscriptions
              ? detailArt.inscriptions
              : 'There is no description here'}
          </Text>
        </View>

        <View>
          <Text style={styles.label}>Provenance Text</Text>
        </View>
        <View>
          <Text>
            {detailArt.provenance_text
              ? detailArt.provenance_text
              : 'There is no description here'}
          </Text>
        </View>

        <View>
          <Text style={styles.label}>Publication History</Text>
        </View>
        <View>
          <Text>
            {detailArt.publication_history
              ? detailArt.publication_history
              : 'There is no description here'}
          </Text>
        </View>

        <View>
          <Text style={styles.label}>Exhibition History</Text>
        </View>
        <View>
          <Text>
            {detailArt.exhibition_history
              ? detailArt.exhibition_history
              : 'There is no description here'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#EEE',
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
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
    height: 60,
    paddingVertical: 5,
  },
  credit: {
    width: width * 0.5,
    marginLeft: width * 0.35,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5,
  },
});
