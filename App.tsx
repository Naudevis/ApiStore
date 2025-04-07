import React from 'react';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <DrawerNavigation></DrawerNavigation>
  );
};

export default App;


