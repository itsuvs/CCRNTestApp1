import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NavigatorStyles } from '../styles';

export default function Navigator() {
    const navigation = useNavigation()
  return (
    <View style={NavigatorStyles.mainContainer}>
      <Pressable
        onPress={() => navigation.navigate('LocationList')}
        style={NavigatorStyles.navigatorButton}
        testID='navigation-locations-tab'>
        <Text style={NavigatorStyles.navigatoreButtonText}>Location List</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('MapView')}
        style={NavigatorStyles.navigatorButton}
        testID='navigation-map-tab'>
        <Text style={NavigatorStyles.navigatoreButtonText}>Map</Text>
      </Pressable>
    </View>
  );
}
