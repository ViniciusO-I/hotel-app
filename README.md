# Hotel App

App mobile de listagem e reserva de hotéis desenvolvido com React Native e Expo.

## Tecnologias

- React Native 0.81.5
- Expo SDK 54
- Expo Router 6 (navegação file-based)
- TypeScript
- AsyncStorage (persistência de favoritos)

## Funcionalidades

- Tela inicial com hero image e botão de acesso
- Listagem de hotéis com imagem, nome e preço
- Busca por nome em tempo real
- Avaliação com estrelas
- Favoritar hotéis (persiste entre sessões)
- Tela de detalhes com endereço, telefone e preço diário
- Botão de reserva com confirmação

## Estrutura

```
app/
  _layout.tsx       # Configuração de navegação
  index.tsx         # Tela inicial (hero)
  hotels.tsx        # Lista de hotéis
  hotel/[id].tsx    # Detalhes do hotel
components/
  HotelCard.tsx     # Card da lista
  StarRating.tsx    # Componente de estrelas
data/
  hotels.ts         # Dados mock
hooks/
  useFavorites.ts   # Hook de favoritos
types/
  hotel.ts          # Tipagem TypeScript
```

## Como rodar

```bash
npm install --legacy-peer-deps
npx expo start
```

Escaneie o QR Code com o app **Expo Go** no celular.
