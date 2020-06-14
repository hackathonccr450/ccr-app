import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 20px;
`;

export const CallButton = styled.TouchableOpacity`
  margin-top: 20px;
  border: 2px solid #222;
  border-radius: 10px;
  height: 54px;
  justify-content: center;
  align-items: center;
`;

export const CallTextButton = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
`;
