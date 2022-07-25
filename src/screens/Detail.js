import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSharedValue, withSpring} from 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  clearSelected,
  getDetail,
  removeArt,
  saveArt,
} from '../redux/actions/artAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LikeButton from '../components/LikeButton';
import DetailSkeleton from '../components/DetailSkeleton';

const {width, height} = Dimensions.get('window');

const Detail = navigation => {
  const dispatch = useDispatch();
  const likeIndicator = useSharedValue(0);
  const {id} = navigation.route.params;
  const [isLiked, setIsLiked] = useState(false);
  const detailArt = useSelector(state => state.artReducer.detailArt);
  const isLoading = useSelector(state => state.artReducer.isLoading);
  const savedArt = useSelector(state => state.artReducer.savedArt);

  const likeHandler = () => {
    dispatch(saveArt(detailArt));
    likeIndicator.value = withSpring(likeIndicator.value ? 0 : 1);
    setIsLiked(isLiked => !isLiked);
  };

  const dislikeHandler = () => {
    dispatch(removeArt(detailArt));
    likeIndicator.value = withSpring(likeIndicator.value ? 0 : 1);
    setIsLiked(isLiked => !isLiked);
  };

  useEffect(() => {
    dispatch(getDetail(id));
    savedArt.filter(item => {
      if (item.id == id) {
        setIsLiked(true);
      }
    });
  }, []);
  if (isLoading) {
    return <DetailSkeleton />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigation.goBack();
              dispatch(clearSelected());
            }}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>{detailArt.title}</Text>
        </View>
        <ScrollView style={styles.content}>
          {Object.keys(detailArt).length > 0 && (
            <View style={styles.photoContainer}>
              <Image
                style={styles.thumbnail}
                source={{
                  uri:
                    `https://www.artic.edu/iiif/2/` +
                    detailArt.image_id +
                    `/full/843,/0/default.jpg`,
                }}></Image>
            </View>
          )}
          <View style={styles.panel}>
            <LikeButton
              onPress={isLiked ? dislikeHandler : likeHandler}
              isLiked={isLiked}
              likeIndicator={likeIndicator}
            />
            <View style={styles.credit}>
              <Text>Credit : {detailArt.credit_line}</Text>
            </View>
            <View>
              <Text></Text>
            </View>
          </View>

          <View>
            <Text style={styles.label}>Inscriptions</Text>
          </View>
          <View style={styles.info}>
            <Text>
              {detailArt.inscriptions
                ? detailArt.inscriptions
                : 'There is no description here'}
            </Text>
          </View>

          <View>
            <Text style={styles.label}>Provenance Text</Text>
          </View>
          <View style={styles.info}>
            <Text>
              {detailArt.provenance_text
                ? detailArt.provenance_text
                : 'There is no description here'}
            </Text>
          </View>

          <View>
            <Text style={styles.label}>Publication History</Text>
          </View>
          <View style={styles.info}>
            <Text>
              {detailArt.publication_history
                ? detailArt.publication_history
                : 'There is no description here'}
            </Text>
          </View>

          <View>
            <Text style={styles.label}>Exhibition History</Text>
          </View>
          <View style={styles.info}>
            <Text>
              {detailArt.exhibition_history
                ? detailArt.exhibition_history
                : 'There is no description here'}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#EEE',
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  content: {
    marginTop: 10,
    paddingHorizontal: width * 0.05,
  },
  thumbnail: {
    width: width * 0.9,
    height: width * 0.9,
  },
  panel: {
    flexDirection: 'row',
    height: 60,
    paddingVertical: 5,
  },
  credit: {
    width: width * 0.8,
    marginLeft: width * 0.1,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 5,
  },
  info: {
    width: '100%',
    minHeight: height * 0.035,
    marginBottom: 5,
  },
});
