import {
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView
} from 'react-native';
import React from 'react';

import BlankScreen from '../BlankScreen';
import ArtList from '../../components/ArtList';

import useViewModel from './SavedModel';

const { width } = Dimensions.get('window');

const Saved = () => {
  const { savedArt, removeDataArt, goToDetailPage } = useViewModel();

  if (savedArt.length <= 0) {
    return <BlankScreen />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={savedArt}
          renderItem={({ item }) => <ArtList data={item} remove={removeDataArt} nav={goToDetailPage} />}
          style={styles.content}
        />
      </SafeAreaView>
    );
  }
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: width * 0.025
  }
});
