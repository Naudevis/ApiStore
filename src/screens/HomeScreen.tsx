import React, { useEffect, useState } from 'react'; // Importa React y hooks para gestionar estado y efectos
import { ScrollView, Text } from 'react-native'; // Importa componentes de React Native
import { useNavigation } from '@react-navigation/native'; // Hook para la navegación
import { Character } from '../types/character'; // Importa el tipo de datos Character
import global from '../styles/global'; // Importa estilos globales
import api from '../api/api'; // Importa la instancia de la API
import CharacterCard from '../components/CharacterCard';

 // Importa el componente de tarjeta de personaje


 export default function HomeScreen() {
  const [characters, setCharacters] = useState<Character[]>([]); // Estado para almacenar los personajes
  const navigation = useNavigation(); // Obtiene el objeto de navegación

    useEffect(()=>{
        const fetchCharacter =async () =>{
          const response = await api.get('/products');
          setCharacters(response.data);
          
        };
        fetchCharacter(); 
    },[])
  return (
    <ScrollView style={global.container}>
      {/* Contenedor desplazable que usa los estilos globales */}

      <Text style={global.tittle}>Store</Text>
      {/* Título principal de la pantalla */}

      {characters.map((c) => (
        <CharacterCard key={c.id} character={c}  navigation={navigation}  />
        // Renderiza una tarjeta por cada personaje obtenido de la API
      ))}
    </ScrollView>
  )
}


