import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';
import Home from '../pages/Home';
import MapPage from '../pages/MapPage';
import Detail from '../pages/Detail';
import Score from '../pages/Score';
import Health from '../pages/Health';
import SettingsPage from '../pages/SettingsPage';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#f0f0f5',
      },
    }}
  >
    <App.Screen name="SplashScreen" component={SplashScreen} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="MapPage" component={MapPage} />
    <App.Screen name="Detail" component={Detail} />
    <App.Screen name="Score" component={Score} />
    <App.Screen name="Health" component={Health} />
    <App.Screen name="SettingsPage" component={SettingsPage} />
  </App.Navigator>
);

export default Routes;
