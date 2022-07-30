import { Text } from 'react-native';
import React from 'react';

export const renderViewMore = onPress => {
  return <Text onPress={onPress}>Show more</Text>;
};
export const renderViewLess = onPress => {
  return <Text onPress={onPress}>Show less</Text>;
};
