import React from "react";
import { View, Text } from "react-native";
import { LastTransactions, Btn } from "./styles";

export default function Bottom(){
    return(
        <>
        <LastTransactions style={{fontFamily: 'Montserrat Alternates'}}>last transactions</LastTransactions>
        <Btn></Btn>
        </>
    )
}