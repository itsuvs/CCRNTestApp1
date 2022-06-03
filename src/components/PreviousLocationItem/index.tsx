import React from 'react'
import {View, Text, Button} from 'react-native'
import {PreviousLocationItemStyles, CommonTextStyles} from '../../styles'
import {DELETE_LOCATION} from '../../redux/actions'
import {useDispatch} from 'react-redux'
import {LocationItem} from '../../interfaces'

interface locationItemProps{
    location: LocationItem
}

export default function PreviousLocationItem({location}:locationItemProps) {

  const dispatch = useDispatch()

  const removeLocation = (locationObject : LocationItem) => {
    dispatch(DELETE_LOCATION({id: locationObject.id}))
  }

  return (
    <View style={PreviousLocationItemStyles.mainContainer}>
        <View>
          <View>
              <Text style={[CommonTextStyles.regular, CommonTextStyles.bitBigger]} testID={`list-previous-name-${location.id - 1}`}>
              {location.id} {location.location_name}
              </Text>
          </View>
          <View>
            <Text style={[CommonTextStyles.regular, CommonTextStyles.bitSmaller]} testID={`list-previous-time-${location.id - 1}`}>
              {location.time}
            </Text>
          </View>
        </View>
        <View style={PreviousLocationItemStyles.buttonContainer}>
          <Button title='Remove' color={'#dedede'} onPress={() => removeLocation(location)} testID={`list-previous-remove-${location.id - 1}`}/>
        </View>
    </View>
  )
}