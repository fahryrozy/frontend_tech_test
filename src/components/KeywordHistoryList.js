import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const KeywordHistoryList = ({ keyword, onSelect, onRemove }) => {
  return (
    <View style={styles.keywordPanel}>
      <TouchableOpacity
        onPress={onSelect}
        style={styles.keywordCard}>
        <Text style={styles.keyword}>{keyword}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onRemove}
        style={styles.iconCard}>
        <MaterialCommunityIcons
          name="close-circle"
          size={20}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  );
};

export default KeywordHistoryList;


const styles = StyleSheet.create({
  keywordPanel: {
    borderBottomColor: '#000',
    paddingVertical: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  keywordCard: {
    width: '80%'
  },
  keyword: {
    fontWeight: '500',
    fontSize: 16
  },
  iconCard: {
    width: '10%',
    alignItems: 'flex-end'
  }
});
