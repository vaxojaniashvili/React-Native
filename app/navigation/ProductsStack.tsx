import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from '../screens/Products/ProductsScreen';
import DetailProducts from '../screens/Products/[id]/DetailProducts';

const Stack = createStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        component={ProductsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={DetailProducts}
        options={{
          title: 'Product Details',
          headerStyle: {
            backgroundColor: '#0D192C',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;
