import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import ViewMoreText from 'react-native-view-more-text';

import { renderViewMore, renderViewLess } from '../utils/viewmore';

const { height } = Dimensions.get('window');

const InfoList = ({ label, description }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.info}>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}>
          <Text>
            {description ?
              description
              : 'There is no description here'}
          </Text>
        </ViewMoreText>
      </View>
    </View>
  );
};

export default InfoList;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5
  },
  info: {
    width: '100%',
    minHeight: height * 0.035,
    marginBottom: 5
  }
});
