import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import React from 'react';

import SearchBar from '../../components/SearchBar';
import KeywordHistoryList from '../../components/KeywordHistoryList';
import ClearHistoryButton from '../../components/ClearHistoryButton';

import useViewModel from './SearchModel';

const { height } = Dimensions.get('window');

const Search = ({ navigation }) => {
  const {
    searchedKeyword,
    selectKeywordToSearch,
    clearSearchKeyword,
    removeSearchKeyword
  } = useViewModel();


  const renderContent = ({ item, index }) => {
    if (index < 10) {
      return (
        <KeywordHistoryList keyword={item}
          onSelect={()=>{selectKeywordToSearch(item);}}
          onRemove={()=>removeSearchKeyword(item)}
        />
      );
    }
  };

  const renderFooter = () => {
    if (searchedKeyword.length > 0) {
      return <ClearHistoryButton onClear={clearSearchKeyword} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar isEnabled={true} isFocus={true} navigation={navigation} />
      <View
        style={styles.headerLabel}>
        <View style={{ height: height * 0.05 }}>
          <Text style={styles.label}>Recent Search</Text>
        </View>
        <FlatList
          style={{ height: height * 0.7 }}
          data={searchedKeyword}
          renderItem={renderContent}
          ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  headerLabel: {
    flex: 9,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  label: {
    fontWeight: '900',
    fontSize: 18
  }
});
