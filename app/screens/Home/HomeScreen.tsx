import React from 'react';
import {StyleSheet, View} from 'react-native';
import Heading from '../../components/_organisms/Heading';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Heading />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D192C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
