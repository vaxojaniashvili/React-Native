import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
type RootStackParamList = {
  [x: string]: any;
  Profile: undefined;
  Tabs: undefined;
};
const SettingScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is settings page</Text>
      <Text
        onPress={() => {
          navigation.navigate('Tabs');
        }}
        style={styles.text}>
        Go to home page
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
    fontSize: 18,
    marginTop: 20,
  },
});

export default SettingScreen;
