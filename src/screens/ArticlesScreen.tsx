import React, { useEffect, useState } from 'react'; 
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Character } from '../types/character'; 
import global from '../styles/global';
import api from '../api/api'; 
import CharacterCard from '../components/CharacterCard';



 export default function ArticlesScreen() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const navigation = useNavigation(); 

    useEffect(()=>{
        const fetchCharacter =async () =>{
          const response = await api.get('/products');
          setCharacters(response.data);
          
        };
        fetchCharacter(); 
    },[])
  return (
    <ScrollView style={global.container}>

      <Text style={global.tittle}>Store</Text>

      {characters.map((c) => (
        <CharacterCard key={c.id} character={c}  navigation={navigation}  />
      ))}
    </ScrollView>
  )
}


