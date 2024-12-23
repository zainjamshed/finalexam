import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const CheckoutScreen: React.FC = () => {
  const handlePayment = () => {
    Alert.alert('Success', 'Order placed successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text>Total: $250</Text>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CheckoutScreen;
