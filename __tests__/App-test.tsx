/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../App'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

it('renders correctly', () => {

  const mockStore = configureStore()
  const initialState = {
    locationArray: [],
    currentLocation: {}
  }
  let store = mockStore(initialState)

  renderer.create(
  <Provider store={store}>
      <App />
  </Provider>);
});