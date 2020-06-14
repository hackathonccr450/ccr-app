import styled from 'styled-components/native';
import MapViewFrame, { Marker } from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 20px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: 20px;
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const MapView = styled(MapViewFrame)`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker)`
  width: 90px;
  height: 80px;
`;

export const MapMarkerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #34cb79;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const MapMarkerImage = styled.Image`
  width: 90px;
  height: 45px;
  /* resizeMode: cover; */
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 13px;
  line-height: 23px;
`;
