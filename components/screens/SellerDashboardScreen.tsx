import React from 'react';
import { View, Text, Button, FlatList, StyleSheet,Alert } from 'react-native';

const SellerDashboardScreen: React.FC = () => {
  const orders = [
    { id: '1', productName: 'Product 1', status: 'Pending' },
    { id: '2', productName: 'Product 2', status: 'Shipped' },
  ];

  const renderOrder = ({ item }: { item: { id: string; productName: string; status: string } }) => (
    <View style={styles.order}>
      <Text>{item.productName}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seller Dashboard</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
      />
      <Button title="Add New Product" onPress={() => Alert.alert('Info', 'Navigate to Add Product Screen')} />
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
  order: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default SellerDashboardScreen;
