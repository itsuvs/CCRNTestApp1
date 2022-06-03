import React, {useEffect, useRef} from 'react'
import {AppState, View, Text} from 'react-native'
import PreviousLocationItem from '../PreviousLocationItem'
import {useSelector, useDispatch} from 'react-redux'
import {ADD_LOCATION} from '../../redux/actions'
import {PreviousLocationStyles} from '../../styles'
import {getCoordinates, reverseGeoCode, getLocationPermission} from '../../apis/locationApi'
import type { LocationItem, StoreObject, UserCoordinates } from '../../interfaces'

const key = "f12155f225d94d9988b2ae4ffd5fd4fd"

type Props = {
  children?: JSX.Element;
};

export default function PreviousLocations({children} : Props) {
    
  const data: StoreObject = useSelector((state: StoreObject) => state)
  const dispatch = useDispatch()
  const appState = useRef(AppState.currentState)

  const previousLocationList = data.locationArray.map((locationObject: LocationItem, index: number) => {
      return (
        <PreviousLocationItem location={locationObject} key={index} />
      )
  })

  const runLocationApi = async () => {
    let coordinateResponse: UserCoordinates = await getCoordinates();
    let reverseGeoCodeResponse = await reverseGeoCode(
      coordinateResponse.lat,
      coordinateResponse.lng,
      key,
    );
    let location_name = reverseGeoCodeResponse.data.results[0].formatted;
    let timeObject = new Date(Date.now())
    let time = timeObject.toDateString() + ',' + timeObject.toTimeString()

    dispatch(ADD_LOCATION({
      location_name, time
    }))
  }

  const onStartUp = async () => {
    
    let toBeCalled: NodeJS.Timer

    try {
      const permissionResponse = await getLocationPermission()

      if (permissionResponse.status === "allowed") {
        
        console.log('Location permision granted!');

        runLocationApi()

        toBeCalled = setInterval( runLocationApi, 15000);

        AppState.addEventListener("change", nextAppState => {
          if (
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
          ) {
            console.log("App has come to the foreground!");
            toBeCalled = setInterval(runLocationApi, 15000);
          }
          else{
            clearInterval(toBeCalled)
          }
    
          appState.current = nextAppState;
          console.log("AppState", appState.current);
        });

      } else {
        console.log('Location permission denied!');
      }
    } catch (err) {
      console.warn(err);
    } 
  };

  useEffect(() => {
    onStartUp()
  }, []);

  return (
    <View style={PreviousLocationStyles.mainContainer}>
        <Text style={{color: '#bfbfbd', marginBottom: 10}}>
            Previous Locations
        </Text>
        <View>
            {children}
            {previousLocationList}
        </View>
    </View>
  )
}