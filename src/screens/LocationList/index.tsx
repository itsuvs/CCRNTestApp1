import React from 'react'
import CurrentLocation from '../../components/CurrentLocation'
import PreviousLocations from '../../components/PreviousLocations'
import AllClear from '../../components/AllClear'
import {View, Text, ScrollView} from 'react-native'
import { LocationListStyles } from '../../styles'

export default function LocationList() {
  return (
    <View style={LocationListStyles.mainContainer}>
      <ScrollView>
        <Text style={LocationListStyles.heading} >
          Location Manager
        </Text>
        <CurrentLocation />
        <PreviousLocations />
      </ScrollView>
      <AllClear />
    </View>
  )
}