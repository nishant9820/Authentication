import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View, Text,Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const navigation =useNavigation()
    useEffect(() => {
        const unsubscribe =auth.onAuthStateChanged(user => {
            if(user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])
 
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, Password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Registered iin with: ',user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, Password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Logged in with: ',user.email);
        })
        .catch(error => alert(error.message))
    }
    

  return (
    <SafeAreaView
    style={styles.container}
    behavior={('height')}>
             <View style={styles.mainimg}>
                <Image 
                style={styles.Image}
                source={require('../assets/suvidhal.png')}></Image>
             </View>
        <View style={styles.inputContainer}>
            
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}

            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={ Password}
            onChangeText={text => setPassword(text)}

            style={styles.input}
            secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.button}
            onPress={handleLogin}
            >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.button, styles.buttonOutLine]}
            onPress={handleSignUp}
            >
                <Text style={styles.buttonOutLineText }>REGISTER</Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        
            },

    inputContainer: {
        width: '80%'

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5, 
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30, 
    },
    button: {
        backgroundColor: "#20B08E",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        
    },
    
    buttonOutLine: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#20B08E',
        borderWidth: 2,

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,    

    },
    buttonOutLineText: {
        color: '#20B08E',
        fontWeight: '700',
        fontSize: 16,  
    },
    Image:
    {
        width: 200,
        height: 200,
        marginBottom: 30
    }

      
}) 