import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MainCard, CardTop, Add, AddBg,   } from "./styles";
import Dropdown from "../../../components/Graphs/dropdown";
import Feed from "./feed"
import Button from "./button"

export default function Card() {
  return (
    <>
      <MainCard>
        <Add>
            <AddBg>
          <AntDesign name="pluscircle" size={54} color="#4B75F2" />
            </AddBg>
        </Add>
        <CardTop>
          <Text
            style={{ fontWeight: "700", fontSize: "16px", paddingTop: "2px" }}
          >
            yesterday
          </Text>
          <Dropdown></Dropdown>
        </CardTop>
        <Feed></Feed>
      </MainCard>
      <Button></Button>
    </>
  );
}
