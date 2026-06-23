import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 16 }: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      {stars.map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <Ionicons
            key={star}
            name={filled ? 'star' : half ? 'star-half' : 'star-outline'}
            size={size}
            color="#FFC107"
            style={{ marginRight: 2 }}
          />
        );
      })}
      <Text style={[styles.label, { fontSize: size - 2 }]}>{rating.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  label: {
    color: '#757575',
    marginLeft: 4,
  },
});
