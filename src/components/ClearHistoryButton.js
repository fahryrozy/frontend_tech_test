import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const ClearHistoryButton = ({ onClear }) => {

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.btnFooter}
        onPress={onClear}>
        <Text style={styles.label}>Clear history</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClearHistoryButton;


const styles = StyleSheet.create({
  footer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center'
  },
  btnFooter: {
    backgroundColor: '#EEE',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20
  }
});

