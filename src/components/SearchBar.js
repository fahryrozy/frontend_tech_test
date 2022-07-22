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
import {searchData, searchOFF, searchON} from '../redux/actions/artAction';

const {width, height} = Dimensions.get('window');

const SearchBar = ({isEnabled, isFocus}) => {
  const dispatch = useDispatch();
  const isSearch = useSelector(state => state.artReducer.isSearch);
  return (
    <View style={styles.searchBar}>
      <View style={styles.inputStyle}>
        {isFocus ? (
          <Icon name="arrow-back" size={25} color="#900" />
        ) : (
          <Icon name="search" size={25} color="#900" />
        )}
        <View style={{flex: 1}}>
          <TextInput
            placeholder={'Type your search here'}
            style={{flex: 1, textAlign: 'center'}}
            onSubmitEditing={e => {
              dispatch(searchData(e.nativeEvent.text));
              console.log(e.nativeEvent.text);
            }}
            editable={isEnabled}
            autoFocus={isFocus}
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
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  inputStyle: {
    top: 10,
    width: width * 0.965,
    height: 45,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: '#EEE',
  },
});
