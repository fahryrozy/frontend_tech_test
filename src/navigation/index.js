import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomMenuBar from './BottomMenuBar';
import Detail from '../screens/Detail';
import Search from '../screens/Search';

const Stack = createStackNavigator();

const Navigation = () => {
  const [isLoadingMainScreen, setisLoadingMainScreen] = useState(true);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setisLoadingMainScreen(false);
  //     }, 2000);
  //   });

  //   if (isLoadingMainScreen) {
  //     return <Splash />;
  //   }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={BottomMenuBar}
        screenOptions={{headerShown: false, headerMode: 'float'}}>
        <Stack.Screen name="Main" component={BottomMenuBar} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          screenOptions={{headerShown: true, headerMode: 'float'}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          screenOptions={{headerShown: true, headerMode: 'float'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
