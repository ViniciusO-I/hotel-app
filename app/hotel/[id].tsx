import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { hotels } from '../../data/hotels';
import StarRating from '../../components/StarRating';
import { useFavorites } from '../../hooks/useFavorites';

export default function HotelDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const hotel = hotels.find((h) => h.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!hotel) {
    return (
      <View style={styles.notFound}>
        <Text>Hotel não encontrado.</Text>
      </View>
    );
  }

  const handleReservar = () => {
    Alert.alert(
      'Confirmar Reserva',
      `Deseja reservar o ${hotel.name} por R$ ${hotel.dailyPrice}/dia?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Confirmar',
          onPress: () =>
            Alert.alert('Reserva confirmada!', `Sua reserva no ${hotel.name} foi realizada com sucesso.`),
        },
      ]
    );
  };

  const favorited = isFavorite(hotel.id);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Detalhes',
          headerRight: () => (
            <TouchableOpacity onPress={() => toggleFavorite(hotel.id)} style={{ marginRight: 4 }}>
              <Ionicons
                name={favorited ? 'heart' : 'heart-outline'}
                size={26}
                color={favorited ? '#fff' : '#fff'}
                style={{ opacity: favorited ? 1 : 0.7 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView style={styles.container}>
        <Image source={{ uri: hotel.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{hotel.name}</Text>
          <StarRating rating={hotel.rating} size={20} />

          <View style={styles.divider} />

          <Text style={styles.info}>💰 Price: R$ {hotel.totalPrice}</Text>
          <Text style={styles.info}>📍 Address: {hotel.address}</Text>
          <Text style={styles.info}>📞 Phone: {hotel.phone}</Text>
          <Text style={styles.info}>🗓 Daily Price: R$ {hotel.dailyPrice}</Text>

          <TouchableOpacity style={styles.bookButton} onPress={handleReservar} activeOpacity={0.85}>
            <Text style={styles.bookButtonText}>Reservar Agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 280,
    backgroundColor: '#ccc',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 14,
  },
  info: {
    fontSize: 15,
    color: '#424242',
    marginBottom: 8,
  },
  bookButton: {
    marginTop: 24,
    backgroundColor: '#E91E8C',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
