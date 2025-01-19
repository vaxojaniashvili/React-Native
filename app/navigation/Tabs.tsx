import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ExploreScreen from '../screens/Explore/ExploreScreen';
import ProductsStack from './ProductsStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flexDirection: 'row',
          backgroundColor: '#15263F',
          height: 70,
          justifyContent: 'center',
          borderRadius: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          position: 'absolute',
          top: 20,
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsStack} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
