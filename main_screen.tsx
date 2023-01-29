import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/home'
import Icons from 'react-native-vector-icons/Feather'

const screen = createBottomTabNavigator();


const Tab:React.FC = () => {
  return(
    <screen.Navigator>
      <screen.Screen name="Map" component={HomeScreen} options={{headerShown : false, tabBarIcon : () => (<Icons name='map'/>)}}/>
      <screen.Screen name="List" component={HomeScreen} options={{headerShown : false}}/>
    </screen.Navigator>
  )
}


export default Tab