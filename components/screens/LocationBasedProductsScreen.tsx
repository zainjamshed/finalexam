import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationBasedProductScreen: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [nearbyProducts, setNearbyProducts] = useState([
    { id: '1', name: 'Product A', price: '$100' },
    { id: '2', name: 'Product B', price: '$150' },
  ]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        Alert.alert('Error', 'Unable to fetch location');
      }
    );
  }, []);

  const renderProduct = ({ item }: { item: { id: string; name: string; price: string } }) => (
    <View style={styles.product}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button title="View Details" onPress={() => alert('View Product Details')} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Products</Text>
      {location ? (
        <Text>
          Location: {location.latitude}, {location.longitude}
        </Text>
      ) : (
        <Text>Fetching location...</Text>
      )}
      <FlatList
        data={nearbyProducts}
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

export default LocationBasedProductScreen;
