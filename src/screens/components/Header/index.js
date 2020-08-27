import React from "react";
import { View, Text } from "react-native";
import { Top, Circle, TextTransactions, AllTran, Tran } from "./styles";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <>
      <Top>
        <Circle>
        <Ionicons name="ios-arrow-round-back" size={24} color="#fff" />
        </Circle>
        <Circle>
          <Entypo name="dots-three-horizontal" size={20} color="#fff" />
        </Circle>
      </Top>
      <TextTransactions>
        <Tran>TRANSACTIONS</Tran>
        <AllTran>All transactions</AllTran>
      </TextTransactions>
    </>
  );
}
