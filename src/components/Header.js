import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({ back, title }) => {
  return (

    <View style={styles.header}>
      <TouchableOpacity onPress={back}>
        <MaterialIcons name="arrow-back-ios" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#EEE',
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    width: '95%'
  }
});

