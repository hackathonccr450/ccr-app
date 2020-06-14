import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, TextButton } from './styles';

interface Props {
  page: string;
  text: string;
}

const Button: React.FC<Props> = ({ page, text }) => {
  const navigation = useNavigation();

  function handleNextPage(): void {
    navigation.navigate(page);
  }

  return (
    <Container onPress={handleNextPage}>
      <TextButton>{text}</TextButton>
    </Container>
  );
};

export default Button;
