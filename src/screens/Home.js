import {View, Text} from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <SearchBar style={{flex: 1}} />
      <View
        style={{
          flex: 9,
        }}>
        <MainContent navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
