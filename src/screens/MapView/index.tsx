import React from 'react'
import Map from '../../components/Map'
import Navigator from '../../navigation'
import {View, Text} from 'react-native'

export default function MapView() {
  return (  
    <View>
        <Navigator/>
        <Map />
    </View>
  )
}