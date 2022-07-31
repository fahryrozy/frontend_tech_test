import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { renderViewMore, renderViewLess } from '../utils/viewmore';

import ArtImage from './ArtImage';
import InfoList from './InfoList';
const { width, height } = Dimensions.get('window');

const ArtList = ({ data, remove, nav }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        nav({ id: data.id });
      }}>
      <View style={styles.card}>
        <ArtImage image_id={data.image_id} />
        <View style={styles.panel}>
          <View style={styles.header}>
            <ViewMoreText
              numberOfLines={2}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}>
              <Text style={styles.title}>{data.title}</Text>
            </ViewMoreText>
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              onPress={()=>remove(data)}>
              <FontAwesome name="trash" size={25} color="#900" />
            </TouchableOpacity>
          </View>
        </View>

        <InfoList label="Inscriptions" description={data.inscriptions} />
      </View>
    </TouchableOpacity>
  );
};

export default ArtList;


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
    aligndatas: 'center',
    justifyContent: 'flex-end'
  },
  content: {
    flex: 1,
    paddingHorizontal: width * 0.025
  },
  card: {
    paddingVertical: 20,
    backgroundColor: '#EEE',
    marginVertical: 5,
    paddingHorizontal: width * 0.05,
    width: width * 0.95,
    aligndatas: 'center',
    borderRadius: width * 0.025
  },
  thumbnail: {
    width: width * 0.85,
    height: width * 0.85
  },
  panel: {
    flexDirection: 'row',
    aligndatas: 'flex-start',
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
