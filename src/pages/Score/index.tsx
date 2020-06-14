import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ScoreMessage,
  CouponContainer,
  Coupon,
  CouponValue,
  CouponDescription,
} from './styles';

import NavigateBack from '../../components/NavigateBack';
import Title from '../../components/Title';

const Score: React.FC = () => {
  return (
    <Container>
      <NavigateBack />
      <Title title="Tubarão" />
      <ScoreMessage>Você tem 570 pontos</ScoreMessage>

      <CouponContainer>
        <Coupon>
          <CouponValue>{`300\npontos`}</CouponValue>
          <CouponDescription>Lavagem completa</CouponDescription>
        </Coupon>
        <Coupon>
          <CouponValue>{`1500\npontos`}</CouponValue>
          <CouponDescription>1 Pernoite</CouponDescription>
        </Coupon>
        <Coupon>
          <CouponValue>{`150\npontos`}</CouponValue>
          <CouponDescription>1 Refeição</CouponDescription>
        </Coupon>
        <Coupon>
          <CouponValue>{`2000\npontos`}</CouponValue>
          <CouponDescription>R$100 em compras</CouponDescription>
        </Coupon>
        <Coupon>
          <CouponValue>{`1000\npontos`}</CouponValue>
          <CouponDescription>Troca de 1 pneu</CouponDescription>
        </Coupon>
        <Coupon>
          <CouponValue>{`2500\npontos`}</CouponValue>
          <CouponDescription>10 litros de combustível</CouponDescription>
        </Coupon>
      </CouponContainer>
    </Container>
  );
};

export default Score;
