import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.inputStyle}>
        <Icon name="search" size={20} color="#900" />
        <View style={{flex: 1}}>
          <TextInput
            placeholder={'Type your search here'}
            style={{flex: 1, textAlign: 'center'}}
          />
        </View>
        {/* <TouchableOpacity>
        <Text>
          <Icon name="close" size={20} color="#900" />
        </Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 5,
  },
  inputStyle: {
    top: 10,
    width: width * 0.975,
    height: 45,
    borderColor: '#900',
    borderWidth: 2,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: '#FFF',
  },
});
