import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {searchData} from '../redux/actions/artAction';

const {width, height} = Dimensions.get('window');

const SearchBar = ({isEnabled, isFocus, navigation}) => {
  const dispatch = useDispatch();
  const isSearch = useSelector(state => state.artReducer.isSearch);
  return (
    <View style={styles.searchBar}>
      {isFocus && (
        <TouchableOpacity
          style={styles.backIconWrapper}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back" size={25} color="#900" />
        </TouchableOpacity>
      )}
      <View style={isFocus ? styles.inputStyleActive : styles.inputStyle}>
        {!isFocus && <Icon name="search" size={25} color="#900" />}
        <View style={{flex: 1}}>
          <TextInput
            placeholder={'Type your search here'}
            style={{flex: 1, textAlign: 'center'}}
            onSubmitEditing={e => {
              dispatch(searchData(e.nativeEvent.text));
              navigation.navigate('Home', {});
            }}
            editable={isEnabled}
            autoFocus={isFocus}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 5,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconWrapper: {
    top: 10,
    width: width * 0.1,
    height: height * 0.065,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    top: 10,
    width: width * 0.965,
    height: height * 0.065,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: '#EEE',
  },
  inputStyleActive: {
    top: 10,
    width: width * 0.865,
    height: height * 0.065,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: '#EEE',
  },
});
