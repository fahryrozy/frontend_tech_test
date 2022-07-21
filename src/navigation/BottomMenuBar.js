import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Saved from '../screens/Saved';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomMenuBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#900',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <FontAwesome name="home" size={30} color="#FFF" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Saved}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="favorite" size={30} color="#FFF" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenuBar;
