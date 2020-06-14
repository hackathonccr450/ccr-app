import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  MapContainer,
  MapView,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
} from './styles';

import NavigateBack from '../../components/NavigateBack';
import Title from '../../components/Title';

const MapPage: React.FC = () => {
  const navigation = useNavigation();
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    async function loadPosition(): Promise<void> {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Precisamos de sua permissão para acessar sua localização!',
        );

        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  function handleDetailPage(): void {
    navigation.navigate('Detail');
  }

  return (
    <Container>
      <NavigateBack />
      <Title title="Minha Localização" />
      {initialPosition[0] === 0 ? (
        <ActivityIndicator
          size="large"
          color="#34CB79"
          style={{ flex: 1, alignSelf: 'center' }}
        />
      ) : (
        <MapContainer>
          <MapView
            showsUserLocation
            followsUserLocation
            initialRegion={{
              latitude: initialPosition[0],
              longitude: initialPosition[1],
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <MapMarker
              onPress={() => handleDetailPage()}
              coordinate={{ latitude: -22.721672, longitude: -43.6824817 }}
            >
              <MapMarkerContainer>
                <MapMarkerImage
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1567777176186-dfa735f1fe20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
                  }}
                />
                <MapMarkerTitle>Posto Dutra</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
          </MapView>
        </MapContainer>
      )}
    </Container>
  );
};

export default MapPage;
