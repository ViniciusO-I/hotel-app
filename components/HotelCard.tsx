import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Hotel } from '../types/hotel';
import StarRating from './StarRating';

interface HotelCardProps {
  hotel: Hotel;
  onPress: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function HotelCard({
  hotel,
  onPress,
  isFavorite,
  onToggleFavorite,
}: HotelCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: hotel.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{hotel.name}</Text>
        <StarRating rating={hotel.rating} size={14} />
        <Text style={styles.price}>R$ {hotel.dailyPrice}</Text>
      </View>
      <TouchableOpacity onPress={onToggleFavorite} hitSlop={12} style={styles.heart}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={isFavorite ? '#E91E8C' : '#bdbdbd'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 6,
    backgroundColor: '#ccc',
  },
  info: {
    marginLeft: 14,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 2,
  },
  price: {
    fontSize: 14,
    color: '#616161',
    marginTop: 4,
  },
  heart: {
    paddingLeft: 8,
  },
});
