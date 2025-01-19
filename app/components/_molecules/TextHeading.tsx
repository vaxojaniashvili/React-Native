import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailsContent from './DetailsContent';

const TextHeading = () => {
  return (
    <View style={styles.textHeading}>
      <Text style={styles.text}>Equilibrium #3429</Text>
      <Text style={styles.descriptionText}>
        Our Equilibrium collection promotes balance and calm.
      </Text>
      <DetailsContent />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 600,
  },
  textHeading: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 24,
  },
  descriptionText: {
    color: '#8BACD9',
    paddingTop: 12,
    lineHeight: 26,
    fontSize: 20,
    fontWeight: 300,
  },
});
export default TextHeading;
