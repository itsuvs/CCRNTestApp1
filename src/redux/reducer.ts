import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocationItem } from '../interfaces';

const Storage = async (locationArray: []) => {
    await AsyncStorage.setItem("locations", JSON.stringify(locationArray.length > 0 ? locationArray : [])
    );
  };
  
export const sumItems = (locationArray: []) => {
    Storage(locationArray)
    let currentLocation = locationArray[locationArray.length - 1]
    return { currentLocation };
};

const storage = AsyncStorage.getItem("locations")
    ? AsyncStorage.getItem("locations").then((value: string)  => JSON.parse(value))
    : [];

const initialState = {
    locationArray: storage,
    ...sumItems(storage)
};

const locationReducer = (state = initialState, action: {type: string, payload: {id:number}}) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      state.locationArray.push({
        ...action.payload,
        id: state.locationArray.length + 1,
      });
      return {
        ...state,
        locationArray: [...state.locationArray],
        ...sumItems(state.locationArray),
      };
    case 'CLEAR_ALL':
      return {...state, locationArray: [], ...sumItems(state.locationArray)};
    case 'DELETE_LOCATION':
      return {
        ...state,
        ...sumItems(
          state.locationArray.filter(
            (item: LocationItem) => item.id !== action.payload.id,
          ),
        ),
        locationArray: [
          ...state.locationArray.filter(
            (item: LocationItem) => item.id !== action.payload.id,
          ),
        ],
      };
    default:
      return state;
  }
};

export default locationReducer