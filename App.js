import React from 'react'
import App from './src/screens/mainScreen'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function Main(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <App />
      </Stack.Navigator>
    </NavigationContainer>
    )
    
}