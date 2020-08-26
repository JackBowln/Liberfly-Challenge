import React from "react";
import { View, Text } from "react-native";
import {
  MaterialIcons,
  Feather,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  CardFeed,
  MiniCard,
  Circle,
  InfoTran,
  DescTran,
  SubTran,
  Price,
} from "./styles";

export default function Feed() {
  return (
    <CardFeed>
      <MiniCard>
        <Circle style={{ backgroundColor: "#113EDB" }}>
          <MaterialIcons name="local-gas-station" size={24} color="#fff" />
        </Circle>
        <InfoTran>
          <DescTran>CAR</DescTran>
          <SubTran>Fuel</SubTran>
        </InfoTran>
        <Price>$ 120.00</Price>
      </MiniCard>
      <MiniCard>
        <Circle style={{ backgroundColor: "#4E75FF" }}>
          <Feather name="coffee" size={24} color="#fff" />
        </Circle>
        <InfoTran>
          <DescTran>Food</DescTran>
          <SubTran>Bread</SubTran>
        </InfoTran>
        <Price>$ 6.30</Price>
      </MiniCard>
      <MiniCard>
        <Circle style={{ backgroundColor: "#46639D" }}>
          <AntDesign name="mobile1" size={24} color="#fff" />
        </Circle>
        <InfoTran>
          <DescTran>Mobile</DescTran>
          <SubTran>Phone</SubTran>
        </InfoTran>
        <Price>$ 20.00</Price>
      </MiniCard>
      <MiniCard>
        <Circle style={{ backgroundColor: "#FF725B" }}>
          <MaterialCommunityIcons name="bag-checked" size={24} color="#fff" />
        </Circle>
        <InfoTran>
          <DescTran>Present</DescTran>
          <SubTran>Picture</SubTran>
        </InfoTran>
        <Price>$ 360.00</Price>
      </MiniCard>
      <MiniCard>
        <Circle style={{ backgroundColor: "#C55AB4" }}>
          <MaterialIcons
            name="pets"
            size={24}
            color="#fff"
          />
        </Circle>
        <InfoTran>
          <DescTran>CAR</DescTran>
          <SubTran>Fuel</SubTran>
        </InfoTran>
        <Price>$ 36.40</Price>
      </MiniCard>
    </CardFeed>
  );
}
