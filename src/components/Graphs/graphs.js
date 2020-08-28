import React from "react";
import { Activity } from "./styles";
import Dropdown from './dropdown'
import Amount from './content'

export default function Graphs() {
  return (
    <>
    <Activity style={{fontFamily: 'Montserrat Alternates'}}>
      activity
     
    <Dropdown></Dropdown>
    </Activity>
    <Amount></Amount>
    </>
  );
}
