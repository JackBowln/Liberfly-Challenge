import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import {Body} from './styles'
import Header from '../components/Header'
import Card from '../components/Card'
var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Montserrat Alternates', 'Roboto', 'Comfortaa']
  }
});

export default function Main({navigation}) {
    return (
        <>
        <Body style={styles.container}>
        <View
          style={{
            width: "48px",
            marginLeft: "5%",
            marginTop: "32px",
            zIndex: 1,
          }}
          >
          <Button
            color="transparent"
            title=" "
            onPress={() => navigation.navigate("MainScreen")}
          ></Button>
        </View>
        <StatusBar style="dark" StatusBarAnimation="fade" />
        <Header></Header>
        <Card></Card>
        </Body>
        </>


    )
}

const styles = StyleSheet.create({
  container: {

      fontFamily: 'Alata Regular'
  }
})