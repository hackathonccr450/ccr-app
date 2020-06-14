import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 20px;
`;

export const ScoreMessage = styled.Text`
  margin-top: 15px;
  font-size: 24px;
  text-align: center;
`;

export const CouponContainer = styled.View`
  flex: 1;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Coupon = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;

export const CouponValue = styled.Text`
  height: 60px;
  width: 60px;
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  padding-top: 10px;
`;

export const CouponDescription = styled.Text`
  padding-left: 15px;
  font-size: 18px;
`;
