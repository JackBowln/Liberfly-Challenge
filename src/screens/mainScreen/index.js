import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Body, navBtn } from "./styles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header/header";
import Tab from "../../components/Tab/tab";
import Graphs from "../../components/Graphs/graphs";
import Bottom from "../../components/Bottom/bottom";

export default function MainScreen({ navigation }) {
  return (
    <>
      <StatusBar style="dark" StatusBarAnimation="fade" />
      <Body>
        <Header></Header>
        <Tab></Tab>
        <View
          style={{
            width: "55px",
            marginLeft: "80%",
            marginTop: "-20px",
          }}
          >
          <Button
            color="transparent"
            title=" "
            onPress={() => navigation.navigate("DetailsScreen")}

          ></Button>
        </View>
        <Graphs></Graphs>
        <Bottom></Bottom>
      </Body>
    </>
  );
}
