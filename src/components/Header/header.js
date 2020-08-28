import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import {Top, BalanceContainer, BalanceTitle, BalanceCoin, BalanceCurrecy, Balance, Money, Circle} from './styles.js'
import '../../../assets/fonts/fonts.css'

export default function Header(){
    return(
        <>
    <Top>
        <Circle>
        <Ionicons name="ios-arrow-round-back" size={24} color="#000" />
        </Circle>
        <Circle>
    <MaterialCommunityIcons name="face" size={32} color="#222" />
        </Circle>
    </Top>

    <BalanceContainer>
        <BalanceTitle style={{fontFamily: 'Montserrat Alternates', fontWeight: '500'}}> Current balance </BalanceTitle>
        <Money>
        <BalanceCoin style={{fontFamily: 'Montserrat Alternates'}}>$</BalanceCoin>
        <Balance style={{fontFamily: 'Comfortaa'}}>120.60</Balance>
        <BalanceCurrecy>USD</BalanceCurrecy>
        </Money>
    </BalanceContainer>
    </>
    )
} 