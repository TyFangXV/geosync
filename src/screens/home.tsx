import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import MapView from 'react-native-maps';

const Home:React.FC<{}> = () => {
  return(
    <View>
        <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    </View>
  )
}

export default Home;