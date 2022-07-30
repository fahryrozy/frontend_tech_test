import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home';
import Saved from '../screens/Saved';

const Tab = createBottomTabNavigator();

const BottomMenuBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarStyle: {
          height: 50,
          bottom: 0,
          right: 0,
          left: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#900'
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <FontAwesome name="home" size={30} color="#FFF" />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Saved}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="favorite" size={30} color="#FFF" />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenuBar;
