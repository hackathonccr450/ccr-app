import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
// import MapView, { Marker } from 'react-native-maps';

import { Container } from './styles';

const Dashboard: React.FC = () => {
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

  return (
    <Container>
      {/* {location[0] === 0 ? (
        <ActivityIndicator />
      ) : (
        <MapView
          showsUserLocation
          followsUserLocation
          initialRegion={{
            latitude: location[0],
            longitude: location[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: -23.6433874, longitude: -46.7140585 }}
          />
        </MapView>
      )} */}
    </Container>
  );
};

export default Dashboard;
