import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather as Icon, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  PointImage,
  PointName,
  Rating,
  RatingTitle,
  StarConteiner,
} from './styles';

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function handleNavigateBack(): void {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={30} color="#34cb79" />
        </TouchableOpacity>

        <PointImage
          source={{
            uri:
              'https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
          }}
        />

        <PointName>Posto Pres. Dutra</PointName>

        <Rating>
          <RatingTitle>Classificação</RatingTitle>
          <StarConteiner>
            <MaterialCommunityIcons name="star" size={30} color="gold" />
            <MaterialCommunityIcons name="star" size={30} color="gold" />
            <MaterialCommunityIcons name="star" size={30} color="gold" />
            <MaterialCommunityIcons name="star-half" size={30} color="gold" />
            <MaterialCommunityIcons
              name="star-outline"
              size={30}
              color="gold"
            />
          </StarConteiner>
        </Rating>
      </Container>
    </SafeAreaView>
  );
};

export default Detail;
