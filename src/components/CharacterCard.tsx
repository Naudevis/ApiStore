import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Character } from '../types/character';

const CharacterCard = ({ character, navigation }: { character?: Character, navigation?: any }) => {
  
  const handlePress = () => {
    navigation.navigate('Details', { character }); 
  };

  return (
    <TouchableOpacity onPress={handlePress} > 
      <View style={styles.card}> 
        
        <Image source={{ uri: character?.image }} style={styles.image} />

        <Text style={styles.name}>{character?.title}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;

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