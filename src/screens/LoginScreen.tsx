import React from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

const LoginScreen = ({ navigation }: any) => {
    //Estado para el usuario y contraseña
    const [username, setUsuario] = React.useState('')
    const [password, setPassword] = React.useState('')
    // Función para validar y redirigir
    const manejarLogin = () => {
        // Validar los campos vacios

        if (!username || !password) {
            Alert.alert('Error: ', 'Todos los campos son obligatorios');
            return
        }
        // Validar la authenticación
        if (username === 'admin' && password === '1234') {
            navigation.navigate('Home',{user:username})
        } else {
            Alert.alert('Error :','Credenciales incorrectas')
        }
    }
    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsuario}
            />
            <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Ingresar" onPress={manejarLogin} />
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        width: '50%'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 5
    }
 
})

export default LoginScreen
