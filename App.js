import React from "react";
import MainScreen from "./src/screens/mainScreen";
import detailsScreen from "./src/screens/detailsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DetailsScreen">
        <Stack.Screen
          name="MainScreen"
          options={{
            headerStyle: {},
            headerShown: false,
            headerTransparent: true,
          }}
          component={MainScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {},
            headerShown: false,
            headerTransparent: true,
            headerTintColor: 'transparent'
          }}
          name='DetailsScreen'
          component={detailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
