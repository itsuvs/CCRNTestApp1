import React from 'react'
import {View, Text, Button} from 'react-native'
import { AllClearStyles } from '../../styles'
import { CLEAR_ALL } from '../../redux/actions'
import { useDispatch } from 'react-redux'

export default function AllClear() {

  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(CLEAR_ALL())
  }

  return (
    <View style={AllClearStyles.mainContainer}>
        <Button title="Clear All" testID='list-clear-all-button' onPress={() => clearAll()} />
    </View>
  )
}