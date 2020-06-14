import React from 'react';
import * as Linking from 'expo-linking';

import { Container, CallButton, CallTextButton } from './styles';

import NavigateBack from '../../components/NavigateBack';
import Button from '../../components/Button';
import Title from '../../components/Title';

const Health: React.FC = () => {
  function handleOpenTel(): void {
    Linking.openURL('tel:+123456789');
  }

  return (
    <Container>
      <NavigateBack />
      <Title title="saúde" />
      <Button page="MapPage" text="PONTOS CCR" />
      <CallButton onPress={() => handleOpenTel}>
        <CallTextButton>Ligar para central</CallTextButton>
      </CallButton>
    </Container>
  );
};

export default Health;
