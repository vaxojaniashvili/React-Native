import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './app/navigation/Tabs';
import ProfileScreen from './app/screens/Profile/ProfileScreen';
import SettingScreen from './app/screens/Settings/SettingScreen';

type RootStackParamList = {
  Tabs: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerTitle: 'Profile',
            headerStyle: {
              backgroundColor: '#0D192C',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            headerShown: true,
            headerTitle: 'Settings',
            headerStyle: {
              backgroundColor: '#0D192C',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
