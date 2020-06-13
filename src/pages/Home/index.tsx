import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNextPage(): void {
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleNextPage}>
        <Text>pagina 2</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
