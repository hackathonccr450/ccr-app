import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default Routes;
