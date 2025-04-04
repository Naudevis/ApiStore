import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa el navegador tipo Drawer
import HomeScreen from '../screens/HomeScreen'; // Pantalla principal
import DetailsScreen from '../screens/DetailsScreen'; // Pantalla de detalles
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';

// Crea una instancia del navegador tipo Drawer
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          drawerStyle: {
            backgroundColor: '#ffffff',
            width: 250,
          },
          headerStyle: {
            backgroundColor: '#150b22',
          },
          headerTintColor: '#fefbfb',
          drawerActiveTintColor: '#1b7449',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            fontSize: 16,
            marginLeft: -10,
          }
         
        })}
      >

<Drawer.Screen name="Login" component={LoginScreen} 
options={{
    title: 'Iniciar Sesión' ,
    // headerTitleStyle: { color: 'white' },
    // headerStyle: { backgroundColor: '#3498db' },
    // headerTintColor: 'white'  // or 'rgba(255, 255, 255, 0.8)' for semi-transparent
}}/>

      {/* Define la navegación con el Drawer y establece la pantalla inicial como "Inicio" */}
      
      <Drawer.Screen  name="Home"  component={HomeScreen} /> 
      {/* Agrega la pantalla de inicio al Drawer */}
      
      <Drawer.Screen   name="Details" component={DetailsScreen} /> 
      {/* Agrega la pantalla de detalles al Drawer */}
    </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default DrawerNavigation
