import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';

const CartScreen: React.FC = () => {
  const cartItems = [
    { id: '1', name: 'Product 1', price: '$100' },
    { id: '2', name: 'Product 2', price: '$150' },
  ];

  const handleCheckout = () => {
    Alert.alert('Success', 'Proceeding to payment!');
  };

  const renderCartItem = ({ item }: { item: { id: string; name: string; price: string } }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
      />
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default CartScreen;
