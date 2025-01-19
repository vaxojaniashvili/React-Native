import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface types {
  id: number;
  title: string;
  image: string;
  description: string;
}

const DetailProducts = ({route}: any) => {
  const {id} = route.params;
  const [product, setProduct] = useState<types | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0D192C',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailProducts;
