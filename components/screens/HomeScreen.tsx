import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const sampleProducts = [
  { id: '1', name: 'Product 1', price: '$100' },
  { id: '2', name: 'Product 2', price: '$150' },
  { id: '3', name: 'Product 3', price: '$200' },
];

const HomeScreen: React.FC = () => {
  const renderProduct = ({ item }: { item: { id: string; name: string; price: string } }) => (
    <View style={styles.product}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search for products..." />
      <FlatList
        data={sampleProducts}
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
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
