import React from 'react';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const App = () => {
  return (
    
     <NavigationContainer>
    <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>
  );
};

export default App;


