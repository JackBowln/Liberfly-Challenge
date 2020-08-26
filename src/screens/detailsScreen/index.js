import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from 'react-native'
import React from 'react'
import {Body} from './styles'
import Header from '../components/Header'
import Card from '../components/Card'

export default function Main({navigation}) {
    return (
        <>
        <Body>
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
