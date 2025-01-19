import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  image: string;
}

type RootStackParamList = {
  ProductsList: undefined;
  ProductDetails: {id: number};
};

const ProductsScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {products.map(product => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetails', {id: product.id});
          }}
          style={styles.productCard}
          key={product.id}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Image source={{uri: product.image}} style={styles.productImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D192C',
    paddingTop: 70,
  },
  contentContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  productCard: {
    width: '90%',
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#1A2B47',
    borderRadius: 8,
    alignItems: 'center',
  },
  productTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default ProductsScreen;
