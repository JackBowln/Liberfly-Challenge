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
  ContainerTran,
  InfoTran,
  DescTran,
  SubTran,
  Currency,
  PriceContainer,
  Price,
  Border
} from "./styles";

export default function Feed() {
  return (
    <CardFeed>
      <MiniCard>
        <ContainerTran>
        <Circle style={{ backgroundColor: "#113EDB" }}>
          <MaterialIcons name="local-gas-station" size={20} color="#fff" />
        </Circle>
        <InfoTran>
          <DescTran>CAR</DescTran>
          <SubTran>Fuel</SubTran>
        </InfoTran>
        </ContainerTran>
        <PriceContainer>
        <Price><Currency>$ </Currency>120.00</Price>
        </PriceContainer>
      </MiniCard>
      <Border></Border>


      <MiniCard>
        <ContainerTran>
        <Circle style={{ backgroundColor: "#4E75FF" }}>
          <Feather name="coffee" size={18} color="#fff" />
        </Circle>
        <InfoTran>
          <DescTran>FOOD</DescTran>
          <SubTran>Bread</SubTran>
        </InfoTran>
        </ContainerTran>
        <PriceContainer>

        <Price><Currency>$ </Currency>6.30</Price>
        </PriceContainer>
      </MiniCard>
      <Border></Border>

      <MiniCard>
        <ContainerTran>
        <Circle style={{ backgroundColor: "#46639D" }}>
          <AntDesign name="mobile1" size={18} color="#fff" />
        </Circle>

        <InfoTran>
          <DescTran>MOBILE</DescTran>
          <SubTran>Phone</SubTran>
        </InfoTran>
        </ContainerTran>
        <PriceContainer>
        <Price><Currency>$ </Currency>20.00</Price>
        </PriceContainer>
      </MiniCard>

      <Border></Border>

      <MiniCard>
        <ContainerTran>
        <Circle style={{ backgroundColor: "#FF725B" }}>
          <MaterialCommunityIcons name="bag-checked" size={20} color="#fff" />
        </Circle>

        <InfoTran>
          <DescTran>PRESENT</DescTran>
          <SubTran>Picture</SubTran>
        </InfoTran>
        </ContainerTran>
        <PriceContainer>

        <Price><Currency>$ </Currency>360.00</Price>
        </PriceContainer>
      </MiniCard>

      <Border></Border>

      <MiniCard>
        <ContainerTran>
        <Circle style={{ backgroundColor: "#C55AB4" }}>
          <MaterialIcons name="pets" size={20} color="#fff" />
        </Circle>

        <InfoTran>
          <DescTran>PET</DescTran>
          <SubTran>Feed</SubTran>
        </InfoTran>
        </ContainerTran>
        <PriceContainer>

        <Price><Currency>$ </Currency>36.40</Price>
        </PriceContainer>
      </MiniCard>
      <Border></Border>

    </CardFeed>
  );
}
