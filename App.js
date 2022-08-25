import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
         Text, 
         View,
         Button 
       } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  const [counter, setCounter] = useState(0) 

  const onClickHandler = () =>{
    setCounter(counter +1)
  }



  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    
  },
  button: {
    color: 'Colors.Black',
    backgroundColor: '#000',
  }

});
