import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './app/navigation/Tabs';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
