import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const DetailsContent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={require('../_atoms/icons/CombinedShape.png')} />
        <Text style={styles.textLeft}>0.041 ETH</Text>
      </View>
      <View style={styles.container2}>
        <Image source={require('../_atoms/icons/Shape.png')} />
        <Text style={styles.textRight}>3 days left</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -50,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    paddingLeft: 70,
  },
  textLeft: {
    color: '#00FFF8',
    fontSize: 15,
    fontWeight: 600,
  },
  textRight: {
    color: '#8BACD9',
    fontSize: 15,
  },
});

export default DetailsContent;
