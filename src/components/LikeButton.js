import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LikeButton = ({onPress, likeIndicator, isLiked, data}) => {
  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            likeIndicator.value,
            [0, 1],
            [1, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: likeIndicator.value,
        },
      ],
      opacity: likeIndicator.value,
    };
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[fillStyle, styles.button]}>
        <MaterialIcons
          name={isLiked ? 'favorite' : 'favorite-border'}
          size={32}
          color={isLiked ? '#F00' : '#000'}
        />
      </Animated.View>

      <Animated.View
        style={[StyleSheet.absoluteFillObject, outlineStyle, styles.button]}>
        <MaterialIcons
          name={isLiked ? 'favorite' : 'favorite-border'}
          size={30}
          color={isLiked ? '#F00' : '#000'}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  button: {
    width: 40,
  },
});
