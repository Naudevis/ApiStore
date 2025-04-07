import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa el navegador tipo Drawer
import HomeScreen from '../screens/HomeScreen'; // Pantalla principal
import DetailsScreen from '../screens/MealDetailsScreen'; // Pantalla de detalles
import 'react-native-gesture-handler';
import { NavigationContainer, Route } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ArticlesScreen from '../screens/ArticlesScreen';
import MealSreen from '../screens/MealScreen';

// Crea una instancia del navegador tipo Drawer
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();// 👉 DrawerNavigator recibe props
const DrawerNavigator = ({ route }:{route:any}) => {
  const  {user}  = route.params || {}; // ✅ Asegura que no sea undefined al principio

  return (
    <Drawer.Navigator
      initialRouteName="Home"

      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#fefbfb',
        drawerActiveTintColor: '#80550a',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
        },
      }}
    >
      {/* 👇 Pasamos `user` como prop al Home */}
      <Drawer.Screen name="Home" component={HomeScreen} initialParams={{ name: user }}/>
      
      {/* <Drawer.Screen name="Articles" component={ArticlesScreen} /> */}
      <Drawer.Screen name="Meal" component={MealSreen} />
      <Drawer.Screen name={"Details"} component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="nav" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default DrawerNavigation;