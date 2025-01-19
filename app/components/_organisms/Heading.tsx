import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainImage from '../_molecules/MainImage';
import TextHeading from '../_molecules/TextHeading';

const Heading = () => {
  return (
    <View style={styles.heading}>
      <MainImage />
      <TextHeading />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    width: 327,
    height: 543,
    backgroundColor: '#15263F',
    borderRadius: 15,
  },
});

export default Heading;
