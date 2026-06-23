import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import HotelCard from '../components/HotelCard';
import { hotels } from '../data/hotels';
import { Hotel } from '../types/hotel';
import { useFavorites } from '../hooks/useFavorites';

export default function HotelsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const { isFavorite, toggleFavorite } = useFavorites();

  const filtered = hotels.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePress = (hotel: Hotel) => {
    router.push({ pathname: '/hotel/[id]', params: { id: hotel.id } });
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Hotéis' }} />
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar hotel..."
          placeholderTextColor="#9e9e9e"
          value={search}
          onChangeText={setSearch}
          clearButtonMode="while-editing"
        />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HotelCard
            hotel={item}
            onPress={() => handlePress(item)}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 15,
    color: '#212121',
  },
});
