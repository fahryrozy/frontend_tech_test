import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBar from '../components/SearchBar';
import {
  clearKeyword,
  removeKeyword,
  searchData
} from '../redux/actions/artAction';

const { width, height } = Dimensions.get('window');

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const { searchedKeyword } = useSelector(state => state.artReducer);
  const handleNavigation = (item) => {
    dispatch(searchData(item));
    navigation.navigate('Home', {});
  };
  const renderContent = ({ item, index }) => {
    if (index < 10) {
      return (
        <View style={styles.keywordPanel}>
          <TouchableOpacity
            onPress={handleNavigation}
            style={styles.keywordCard}>
            <Text style={styles.keyword}>{item}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(removeKeyword(item));
            }}
            style={styles.iconCard}>
            <MaterialCommunityIcons
              name="close-circle"
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      );
    }
  };
  const renderFooter = () => {
    if (searchedKeyword.length > 0) {
      return (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btnFooter}
            onPress={() => {
              dispatch(clearKeyword());
            }}>
            <Text style={styles.label}>Clear history</Text>
          </TouchableOpacity>
        </View>
      );
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
  },
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
  },
  footer: {
    width: width,
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
