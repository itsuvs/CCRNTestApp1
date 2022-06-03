import { legacy_createStore as createStore} from 'redux';
import locationReducer from './reducer';
import { StoreObject } from '../interfaces';

const initialStore : StoreObject = {
    locationArray: [],
    currentLocation: {
        id: 0,
        location_name: "",
        time: ""
    }  
}

export default function configureStore(initialState = initialStore) {
    return createStore(locationReducer, initialState);
}