import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  padding-top: 20px;
`;

export const PointImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`;

export const PointName = styled.Text`
  color: #322153;
  font-size: 28px;
  margin-top: 24px;
`;

export const Rating = styled.View``;

export const RatingTitle = styled.Text`
  color: #322153;
  font-size: 16px;
  margin-top: 24px;
`;

export const StarContainer = styled.View`
  flex-direction: row;
`;

export const CommentContainer = styled.View`
  /* flex: 1; */
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Comment = styled.View`
  margin-top: 15px;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
`;

export const CommentName = styled.Text``;

export const CommentMessage = styled.Text`
  padding-top: 10px;
`;
