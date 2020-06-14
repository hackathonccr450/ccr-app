import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import MapPage from '../pages/MapPage';
import Detail from '../pages/Detail';

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
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="MapPage" component={MapPage} />
    <App.Screen name="Detail" component={Detail} />
  </App.Navigator>
);

export default Routes;
