import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Heading from '../../components/_organisms/Heading';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  [x: string]: any;
  Profile: undefined;
  Tabs: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View style={styles.container}>
      <Heading />
      <View>
        <Text
          onPress={() => {
            navigation.navigate('Profile');
          }}
          style={styles.text}>
          Go to Home
        </Text>
        <Text
          onPress={() => {
            navigation.navigate('Settings');
          }}
          style={styles.textSettings}>
          Go to settings
        </Text>
      </View>
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
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
  textSettings: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
});

export default HomeScreen;
