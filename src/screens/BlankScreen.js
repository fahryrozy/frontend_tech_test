import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const BlankScreen = ({style}) => {
  return (
    <View style={[style, {flex: 1, backgroundColor: '#FFF'}]}>
      <LottieView
        source={require('../assets/lotties/86045-no-data-found-json.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default BlankScreen;

const styles = StyleSheet.create({});
