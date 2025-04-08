import React, { useEffect, useState } from 'react'; 
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Meal } from '../types/meal'; 
import global from '../styles/global';
import api from '../api/MealApi'; 
import CharacterMealCard from '../components/CharacterMealCard';



 export default function MealSreen() {

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true); // ✅ Estado para manejar "cargando"
  const navigation = useNavigation(); 

  useEffect(() => {
    // Simulando una llamada a una API
    fetchMeals();
  }, []);

  const fetchMeals =async () =>{
    try{
    const response = await api.get('/categories.php');
    setMeals(response.data.categories);
  } catch (error) {
    console.error('Error to load meals:', error);
  } finally {
    setLoading(false); 
  }
  };

  if (loading) {
    return (
      <View style={[global.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
    <ScrollView style={global.container}>

      <Text style={global.tittle}>Meal</Text>

      {meals.map((meal) => (
        <CharacterMealCard key={meal.idCategory} meal={meal}  navigation={navigation}  />
      ))}
    </ScrollView>
  )
}


