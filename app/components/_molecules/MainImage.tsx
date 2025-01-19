import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const MainImage = () => {
  return (
    <View style={styles.mainImageContainer}>
      <Image
        style={styles.mainImage}
        source={require('../_atoms/assets/MainImage.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    width: 278,
    height: 278,
    borderRadius: 8,
  },
  mainImageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24,
  },
});

export default MainImage;
