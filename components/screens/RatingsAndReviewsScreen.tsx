import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, Alert } from 'react-native';

const RatingsAndReviewsScreen: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>('');
  const productReviews = [
    { id: '1', username: 'User1', review: 'Great product!', rating: 5 },
    { id: '2', username: 'User2', review: 'Not bad, but could be better.', rating: 3 },
  ];

  const handleSubmitReview = () => {
    if (rating === null || review.trim() === '') {
      Alert.alert('Error', 'Please provide a rating and review!');
      return;
    }

    // Here you would save the review to your backend
    Alert.alert('Success', 'Review submitted successfully!');
  };

  const renderReview = ({ item }: { item: { id: string; username: string; review: string; rating: number } }) => (
    <View style={styles.review}>
      <Text>{item.username}</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>{item.review}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ratings and Reviews</Text>

      <View style={styles.ratingContainer}>
        <Text>Rate this product:</Text>
        {[1, 2, 3, 4, 5].map((i) => (
          <Button key={i} title={`★ ${i}`} onPress={() => setRating(i)} />
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Write your review..."
        value={review}
        onChangeText={(text) => setReview(text)}
      />
      <Button title="Submit Review" onPress={handleSubmitReview} />

      <Text style={styles.title}>Reviews</Text>
      <FlatList
        data={productReviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
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
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
  review: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default RatingsAndReviewsScreen;
