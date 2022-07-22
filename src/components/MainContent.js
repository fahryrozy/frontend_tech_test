import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const {width, height} = Dimensions.get('window');

const MainContent = ({navigation, data, fetchMore}) => {
  return (
    <View style={styles.container}>
      {Object.keys(data).length > 0 && (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            if (
              item !== null &&
              item.thumbnail !== null &&
              Object.keys(item.thumbnail).length > 1
            ) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Detail', {id: `${item.id}`});
                  }}>
                  <Image
                    style={styles.card}
                    source={{uri: item.thumbnail.lqip}}></Image>
                </TouchableOpacity>
              );
            }
          }}
          numColumns={3}
          onEndReachedThreshold={0.4}
          onEndReached={fetchMore}
        />
      )}
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: '#EEE',
    width: width * 0.327,
    height: width * 0.327,
    marginHorizontal: width * 0.003,
    marginBottom: width * 0.006,
    resizeMode: 'cover',
  },
});
