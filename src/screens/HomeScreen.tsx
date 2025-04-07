import React from 'react'
import { Text, View ,Image, StyleSheet} from 'react-native'

const HomeScreen = ({ route }: any) => {
  const  {name}  = route.params || {};

  if (!name) {
    return <Text>No hay nombre en la ruta</Text>
  }
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Welcome, {name} </Text>
      <Image source={{uri:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/c9/58/b8/fabuloso-restaurante.jpg"}} style={styles.image}></Image>
    </View>
  )
}

const styles= StyleSheet.create({

  title:{
    fontSize: 50,
    backgroundColor: "rgba(225, 225, 225, 0.5)",
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    width: '90%',
    color:"white",
    zIndex: 1,
    padding:25,
    borderRadius: 5,

    
  },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  }
})
export default HomeScreen
