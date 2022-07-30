import { View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <LottieView
        source={require('../assets/lotties/55229-artispic.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;
