import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import MainContent from '../components/MainContent';

const Search = ({navigation}) => {
  const searchedData = useSelector(state => state.artReducer.searchedData);
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <SearchBar isEnabled={true} isFocus={true} navigation={navigation} />
      <View
        style={{
          flex: 9,
          backgroundColor: 'white',
        }}>
        <MainContent data={searchedData} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
