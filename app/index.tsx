import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80';

const FEATURES = [
  { icon: 'bed-outline' as const, label: 'Quartos premium' },
  { icon: 'star-outline' as const, label: 'Avaliações reais' },
  { icon: 'shield-checkmark-outline' as const, label: 'Reserva segura' },
];

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground source={{ uri: HERO_IMAGE }} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>

          {/* Logo / Nome */}
          <View style={styles.topSection}>
            <Ionicons name="business" size={52} color="#fff" />
            <Text style={styles.appName}>HotelApp</Text>
            <Text style={styles.slogan}>Os melhores hotéis, na palma da sua mão.</Text>
          </View>

          {/* Destaques */}
          <View style={styles.features}>
            {FEATURES.map((f) => (
              <View key={f.label} style={styles.featureItem}>
                <Ionicons name={f.icon} size={28} color="#fff" />
                <Text style={styles.featureLabel}>{f.label}</Text>
              </View>
            ))}
          </View>

          {/* CTA */}
          <View style={styles.bottomSection}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.85}
              onPress={() => router.push('/hotels')}
            >
              <Text style={styles.buttonText}>Explorar Hotéis</Text>
              <Ionicons name="arrow-forward" size={20} color="#E91E8C" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
            <Text style={styles.disclaimer}>
              Mais de 100 opções disponíveis para você
            </Text>
          </View>

        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.52)',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingTop: 100,
    paddingBottom: 52,
  },
  topSection: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
    letterSpacing: 1,
  },
  slogan: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  featureItem: {
    alignItems: 'center',
    gap: 8,
  },
  featureLabel: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
    maxWidth: 72,
  },
  bottomSection: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 36,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#E91E8C',
  },
  disclaimer: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 13,
    marginTop: 14,
  },
});
