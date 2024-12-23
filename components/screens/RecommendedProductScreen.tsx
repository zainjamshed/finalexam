import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const RecommendedProductsScreen: React.FC = () => {
  const recommendedProducts = [
    { id: '1', name: 'Product A', price: '$100' },
    { id: '2', name: 'Product B', price: '$150' },
  ];

  const renderProduct = ({ item }: { item: { id: string; name: string; price: string } }) => (
    <View style={styles.product}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button title="Add to Cart" onPress={() => alert('Added to Cart')} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Products</Text>
      <FlatList
        data={recommendedProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
});

export default RecommendedProductsScreen;
