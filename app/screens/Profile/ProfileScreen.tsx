import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProfileScreen = () => {
  type RootStackParamList = {
    [x: string]: any;
    Profile: undefined;
    Tabs: undefined;
  };
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>123</Text>
      <Text
        onPress={() => {
          navigation.navigate('Tabs');
        }}
        style={styles.text}>
        Go to Home
      </Text>
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
    fontSize: 20,
  },
});

export default ProfileScreen;
