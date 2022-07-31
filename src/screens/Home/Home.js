import {
  View,
  TouchableWithoutFeedback,
  RefreshControl,
  StyleSheet
} from 'react-native';
import React, { useEffect } from 'react';


import SearchBar from '../../components/SearchBar';
import MainContent from '../../components/MainContent';

import useViewModel from './HomeModel';

const Home = () => {
  const {
    arts,
    refreshing,
    getDataArt,
    handleNavigation,
    onRefresh,
    page,
    fetchMoreArts,
    goToDetailPage
  } = useViewModel();

  useEffect(() => {
    getDataArt();
  }, [page]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={{ flex: 1 }}>
          <SearchBar isEnabled={false} />
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flex: 7 }}>
        <MainContent
          nav={goToDetailPage}
          data={arts}
          refresh={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          fetchMore={fetchMoreArts}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
