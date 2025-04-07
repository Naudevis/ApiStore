import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Meal } from '../types/meal';

const CharacterMealCard = ({ meal, navigation }: { meal?: Meal, navigation?: any }) => {
  
  const handlePress = () => {
    navigation.navigate('Details', { meal }); 
  };

  return (
    <TouchableOpacity onPress={handlePress} > 
      <View style={styles.card}> 
        
        <Image source={{ uri: meal?.strCategoryThumb }} style={styles.image} />

        <Text style={styles.name}>{meal?.strCategory}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default CharacterMealCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10, 
    padding: 10, 
    backgroundColor: 'white',
    borderRadius: 10
  },
  image: {
    width: '100%', 
    height: 200, 
    borderRadius: 10
  },
  name: {
    fontSize: 18, 
    fontWeight: 'bold', // Texto en negrita
    marginTop: 5
  },
});