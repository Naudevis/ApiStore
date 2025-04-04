import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';
// import DetailsScreen from './src/screens/DetailsScreen';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Stack = createStackNavigator();


const App = () => {
  return (
    <DrawerNavigation/>

  );
};

export default App;