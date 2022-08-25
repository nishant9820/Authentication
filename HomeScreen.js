import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    const navigation = useNavigation()
    
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message));
    }

  return (
    <ScrollView style= {styles.ScrollView}>
    <View style = {styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity
      onPress={handleSignOut}
      style = {styles.button}>
        <Text style= {styles.buttonText}>SIGN OUT</Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      marginTop: 500,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    
    button: {
        backgroundColor: "#20B08E",
        width: "40%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,


  
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,    

    },
})