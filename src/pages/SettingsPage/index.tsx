import React from 'react';
import { Switch } from 'react-native';

import {
  Container,
  SliderContainer,
  SliderText,
  Slider,
  Space,
  SwitchContainer,
  SwitchText,
} from './styles';

import NavigateBack from '../../components/NavigateBack';
import Title from '../../components/Title';

const SettingsPage: React.FC = () => {
  return (
    <Container>
      <NavigateBack />
      <Title title="Configurações" />
      <Space />
      <SliderContainer>
        <SliderText>Volume</SliderText>
        <Slider value={5} minimumValue={0} maximumValue={10} />
      </SliderContainer>
      <Space />
      <SliderContainer>
        <SliderText>Brilho</SliderText>
        <Slider value={5} minimumValue={1} maximumValue={10} />
      </SliderContainer>
      <Space />
      <SliderContainer>
        <SliderText>Distância do alerta em KM</SliderText>
        <Slider value={5} maximumValue={20} minimumValue={2} />
      </SliderContainer>
      <Space />
      <SwitchContainer>
        <SwitchText>{`Leitura automática de\nalerta`}</SwitchText>
        <Switch value style={{ flex: 1, right: 0 }} />
      </SwitchContainer>
    </Container>
  );
};

export default SettingsPage;
