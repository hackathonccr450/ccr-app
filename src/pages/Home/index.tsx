import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, MapButton, TextButton } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNextPage(): void {
    navigation.navigate('MapPage');
  }

  return (
    <Container>
      <Title>Olá, Tubarão</Title>
      <MapButton onPress={handleNextPage}>
        <TextButton>MAPA</TextButton>
      </MapButton>
      <MapButton onPress={handleNextPage}>
        <TextButton>PONTOS</TextButton>
      </MapButton>
      <MapButton onPress={handleNextPage}>
        <TextButton>SAÚDE</TextButton>
      </MapButton>
      <MapButton onPress={handleNextPage}>
        <TextButton>CONFIGURACÕES</TextButton>
      </MapButton>
    </Container>
  );
};

export default Home;
