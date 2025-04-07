import React, { useEffect, useState } from 'react'; 
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Meal } from '../types/meal'; 
import global from '../styles/global';
import api from '../api/MealApi'; 
import CharacterMealCard from '../components/CharacterMealCard';



 export default function MealSreen() {
  const [meals, setCharacters] = useState<Meal[]>([]);
  const navigation = useNavigation(); 

    useEffect(()=>{
        const fetchCharacter =async () =>{
          const response = await api.get('/categories.php');
          setCharacters(response.data.categories);
          
        };
        fetchCharacter(); 
    },[])
  return (
    <ScrollView style={global.container}>

      <Text style={global.tittle}>Meal</Text>

      {meals.map((c) => (
        <CharacterMealCard key={c.idCategory} meal={c}  navigation={navigation}  />
      ))}
    </ScrollView>
  )
}


