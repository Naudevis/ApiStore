import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';
// import DetailsScreen from './src/screens/DetailsScreen';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Stack = createStackNavigator();

const Stack = createStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Home'}} />
        <Stack.Screen name="nav" component={DrawerNavigation} options={{title: 'Details'}} />
      </Stack.Navigator>
   
    </GestureHandlerRootView>
  );
};

export default App;


