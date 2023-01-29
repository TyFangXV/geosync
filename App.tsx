import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './main_screen'

const Home:React.FC = () => {
  return(
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
  )
}


export default Home