import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ProductDetailsScreen: React.FC = () => {
  const product = {
    id: '1',
    name: 'Sample Product',
    price: '$100',
    description: 'This is a detailed description of the product.',
    imageUrl: 'https://via.placeholder.com/150',
    seller: { name: 'Seller Name', rating: 4.5 },
  };

  const handleAddToCart = () => {
    Alert.alert('Success', 'Product added to cart!');
  };

  const handleBuyNow = () => {
    Alert.alert('Success', 'Proceeding to checkout!');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.seller}>
        Sold by: {product.seller.name} (Rating: {product.seller.rating})
      </Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
      <Button title="Buy Now" onPress={handleBuyNow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#00aaff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  seller: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
