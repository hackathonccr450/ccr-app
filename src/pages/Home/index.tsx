import React from 'react';

import { Container } from './styles';

import Button from '../../components/Button';
import Title from '../../components/Title';

const Home: React.FC = () => {
  return (
    <Container>
      <Title title="Olá, Tubarão" />
      <Button page="MapPage" text="MAPA" />
      <Button page="Score" text="PONTOS" />
      <Button page="Health" text="SAÚDE" />
      <Button page="SettingsPage" text="CONFIGURAÇÕES" />
    </Container>
  );
};

export default Home;
