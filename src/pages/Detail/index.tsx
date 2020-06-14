import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import {
  Container,
  PointImage,
  PointName,
  Rating,
  RatingTitle,
  StarContainer,
  CommentContainer,
  Comment,
  CommentName,
  CommentMessage,
} from './styles';

import NavigateBack from '../../components/NavigateBack';

const Detail: React.FC = () => {
  return (
    <Container>
      <NavigateBack />

      <PointImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
        }}
      />

      <PointName>Posto Pres. Dutra</PointName>

      <Rating>
        <RatingTitle>Classificação</RatingTitle>
        <StarContainer>
          <Icon name="star" size={30} color="gold" />
          <Icon name="star" size={30} color="gold" />
          <Icon name="star" size={30} color="gold" />
          <Icon name="star-half" size={30} color="gold" />
          <Icon name="star-outline" size={30} color="gold" />
        </StarContainer>
      </Rating>
      <CommentContainer>
        <Comment>
          <CommentName>Fulano de Tal</CommentName>
          <CommentMessage>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CommentMessage>
        </Comment>
        <Comment>
          <CommentName>Fulano de Tal</CommentName>
          <CommentMessage>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CommentMessage>
        </Comment>
        <Comment>
          <CommentName>Fulano de Tal</CommentName>
          <CommentMessage>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CommentMessage>
        </Comment>
      </CommentContainer>
    </Container>
  );
};

export default Detail;
