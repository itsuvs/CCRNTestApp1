import axios from 'axios';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { UserCoordinates } from '../interfaces';

export const getCoordinates = () : Promise<UserCoordinates> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position): void => {
        let coordinates: UserCoordinates = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        resolve(coordinates);
      },
      error => {
        console.log(error.code, error.message);
        reject('An error has occured!');
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};

export const reverseGeoCode = (
  LAT: number,
  LNG: number,
  openCageKey: string,
) : Promise<object> => {
  return axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${LAT}+${LNG}&key=${openCageKey}&language=en&pretty=1`,
  );
};

export const getLocationPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  return new Promise((resolve, reject) => {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        resolve({status: 'allowed'})
      } else {
        resolve({status: 'restricted'})

      }
  })
}
