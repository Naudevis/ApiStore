import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }: any) => {
    //Estado para el usuario y contraseña
    const [username, setUsuario] = React.useState('')
    const [password, setPassword] = React.useState('')
    // Función para validar y redirigir
    const manejarLogin = () => {
        // Validar los campos vacios

        if (!username || !password) {
            Alert.alert('Error: ', 'All spaces are required');
            return
        }
        // Validar la authenticación
        if (username === 'admin' && password === '1234') {
            navigation.navigate('nav',{user:username})
        } else {
            Alert.alert('Error :','Incorrect credentials')
        }
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.card}>

            <Text style={styles.title}>Sing in</Text>
            <Image source={{uri:"https://www.pngall.com/wp-content/uploads/15/User.png"}} style={styles.img}></Image>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsuario}
            />
            <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
   <TouchableOpacity onPress={manejarLogin} style={styles.button}>
  <Text style={{color:"white"}}>Sing in</Text>
</TouchableOpacity>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"gray"
    },
    card:{
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        borderRadius:5,
    },
    button: {
        marginTop: 2,
        padding: 15,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    img:{
        width: 130,
        height: 130,
        marginBottom: 20
    }
 
})

export default LoginScreen
