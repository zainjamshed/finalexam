import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const OrderTrackingScreen: React.FC = () => {
  const order = {
    id: '1',
    status: 'Shipped',
    estimatedDelivery: '2024-12-30',
    trackingNumber: '1234567890',
  };

  const handleTrackOrder = () => {
    Alert.alert('Tracking Information', `Tracking number: ${order.trackingNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Tracking</Text>
      <Text>Order ID: {order.id}</Text>
      <Text>Status: {order.status}</Text>
      <Text>Estimated Delivery: {order.estimatedDelivery}</Text>

      <Button title="Track Order" onPress={handleTrackOrder} />
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
});

export default OrderTrackingScreen;
