/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import LocationList from '../src/screens/LocationList';
 import {Provider} from 'react-redux'
 import configureStore from 'redux-mock-store'
 import renderer from 'react-test-renderer';
 
 it('Location screen renders correctly', () => {
  const mockStore = configureStore()
  const initialState = {
    locationArray: [],
    currentLocation: {}
  }
  let store = mockStore(initialState)
   renderer.create(<Provider store={store}>
      <LocationList />
   </Provider>);
 });
 