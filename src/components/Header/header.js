import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {Top, BalanceContainer, BalanceTitle, BalanceCoin, BalanceCurrecy, Balance, Money, Circle} from './styles.js'

export default function Header(){
    return(
        <>
    <Top>
        <Circle>
    <MaterialCommunityIcons name="arrow-left" size={25} color="#000"/>
        </Circle>
        <Circle>
    <MaterialCommunityIcons name="face" size={32} color="#000" />
        </Circle>
    </Top>

    <BalanceContainer>
        <BalanceTitle> Current Balance </BalanceTitle>
        <Money>
        <BalanceCoin>$</BalanceCoin>
        <Balance>120.60</Balance>
        <BalanceCurrecy>USD</BalanceCurrecy>
        </Money>
    </BalanceContainer>
    </>
    )
} 