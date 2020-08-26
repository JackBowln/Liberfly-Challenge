import React from "react";
import { View } from "react-native";
import {
  BarContainer,
  Bar1,
  Bar2,
  Bar3,
  Bar4,
  Bar5,
  Bar6,
  BarContainer2,
  Bar12,
  Bar22,
  Bar32,
  Bar42,
  Bar52,
  Bar62,
  Bar72,
  Separator,
  Specs,
  Specs2,
  Text,
  Text2
} from "./styles";

export default function Amount() {
  return (
    <>
      <BarContainer>
        <Specs>
          <Text styles={{marginTop: '-10px'}}>100</Text>
          <Bar1></Bar1>
        </Specs>
        <Specs>
          <Text>80</Text>
          <Bar2></Bar2>
        </Specs>
        <Specs>
          <Text>90</Text>
          <Bar3></Bar3>
        </Specs>
        <Specs>
          <Text>100</Text>
          <Bar1></Bar1>
        </Specs>
        <Specs>
          <Text>70</Text>
          <Bar4></Bar4>
        </Specs>
        <Specs>
          <Text>85</Text>
          <Bar6></Bar6>
        </Specs>
        <Specs>
          <Text>70</Text>
          <Bar4></Bar4>
        </Specs>
      </BarContainer>

      <Separator></Separator>

      <BarContainer2>

        <Specs2>
          <Bar12></Bar12>
          <Text2 style={{marginLeft: '-5px'}}>60</Text2>
        </Specs2>
        <Specs2>
          <Bar22></Bar22>
          <Text2>20</Text2>
        </Specs2>
        <Specs2>
          <Bar32></Bar32>
          <Text2>20</Text2>
        </Specs2>
        <Specs2>
          <Bar42></Bar42>
          <Text2>20</Text2>
        </Specs2>
        <Specs2>
          <Bar52></Bar52>
          <Text2>20</Text2>
        </Specs2>
        <Specs2>
          <Bar62></Bar62>
          <Text2>20</Text2>
        </Specs2>
        <Specs2>
          <Bar72></Bar72>
          <Text2>20</Text2>
        </Specs2>
      </BarContainer2>
    </>
  );
}
