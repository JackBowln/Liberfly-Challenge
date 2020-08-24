import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Body } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Header from './components/Header/header'
import Tab from './components/Tab/tab'
import Graphs from './components/Graphs/graphs'
export default function App() {
  return (
      <>
      <StatusBar style="dark" StatusBarAnimation="fade" />
      <Body>
          <Header></Header>
          <Tab></Tab>
          <Graphs></Graphs>
      </Body>
      </>
  );
}
