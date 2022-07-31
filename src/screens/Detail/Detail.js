import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions
} from 'react-native';
import React, { useEffect } from 'react';

import LikeButton from '../../components/LikeButton';
import DetailSkeleton from '../../components/DetailSkeleton';
import InfoList from '../../components/InfoList';
import Header from '../../components/Header';
import ArtImage from '../../components/ArtImage';

import useViewModel from './DetailModel';

const { width, height } = Dimensions.get('window');

const Detail = navigation => {
  const { id } = navigation.route.params;
  const {
    likeIndicator,
    isLiked,
    setIsLiked,
    getDetailData,
    savedArt,
    detailArt,
    likeHandler,
    dislikeHandler,
    isLoading,
    backToHome
  } = useViewModel();

  useEffect(() => {
    getDetailData(id);
    savedArt.filter(item => {
      if (item.id === id) {
        setIsLiked(true);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (<DetailSkeleton />) : (
        <>
          <Header back={backToHome} title={detailArt.title} />
          <ScrollView style={styles.content}>
            <ArtImage image_id={detailArt.image_id} />
            <View style={styles.panel}>
              <LikeButton
                onPress={isLiked ? dislikeHandler : likeHandler}
                isLiked={isLiked}
                likeIndicator={likeIndicator}
              />
              <InfoList label="Credit" description={detailArt.credit} />
            </View>

            <InfoList label="Inscription Text" description={detailArt.inscription_text} />
            <InfoList label="Provenance Text" description={detailArt.provenance_text} />
            <InfoList label="Publication History" description={detailArt.publication_history} />
            <InfoList label="Exhibition History" description={detailArt.exhibition_history} />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    marginTop: 10,
    paddingHorizontal: width * 0.05
  },

  panel: {
    minHeight: height * 0.1,
    paddingVertical: 5
  }
});
