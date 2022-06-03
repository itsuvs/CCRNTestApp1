import React from 'react';
import {View, Text} from 'react-native';
import { CurrentLocationStyles, CommonTextStyles } from '../../styles';
import { useSelector } from 'react-redux';
import { StoreObject } from '../../interfaces';

export default function CurrentLocation() {

  const data = useSelector((state : StoreObject) => state)

  return (
    <View style={CurrentLocationStyles.mainContainer} testID='list-current-item'>
        <Text style={{color: '#bfbfbd'}} testID='list-current-label'>
            Current Location
        </Text>
        <View style={CurrentLocationStyles.detailsContainer}>
          <View style={CurrentLocationStyles.detailsIcon}>
            <Text style={CommonTextStyles.regular} testID='list-current-icon'>
              NA
            </Text>
          </View>
      {
        data.locationArray.length === 0

        ?

        <View>
          <Text>
            No Location Added!
          </Text>
        </View>

        :

        <View>
          <Text style={CommonTextStyles.regular} testID='list-current-name'>
            {data.locationArray[data.locationArray.length - 1].location_name}
          </Text>
          <Text style={CommonTextStyles.regular} testID='list-current-time'>
            {data.locationArray[data.locationArray.length - 1].time}
          </Text>
        </View>
      }
        </View>
    </View>
  )
}