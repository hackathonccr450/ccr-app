import styled from 'styled-components/native';
import MapViewFrame from 'react-native-maps';

export const Container = styled.View`
  padding: 10px;
`;

export const MapView = styled(MapViewFrame)`
  margin-top: 20px;
  height: 500px;
  width: 100%;
`;

export const MapContainer = styled(MapViewFrame)`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16;
`;
