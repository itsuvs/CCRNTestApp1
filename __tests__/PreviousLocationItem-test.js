import 'react-native'
import React from 'react'
import PreviousLocationItem from '../src/components/PreviousLocationItem'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react-native'
import {DELETE_LOCATION} from '../src/redux/actions'

it('dispatches all clear action perfectly', () => {
   
    afterEach(() => {
        jest.resetAllMocks()
        cleanup()
    })

    const mockStore = configureStore()
    const initialState = {
      locationArray: [{
          id: 1,
          location_name: 'Location One',
          time: '00:00'
      }],
      currentLocation: {}
    }

    let store = mockStore(initialState)

    store.dispatch = jest.fn()

    const {getByTestId} = render(
        <Provider store={store}>
            <PreviousLocationItem location={initialState.locationArray[0]} key={initialState.locationArray[0].id - 1} />
        </Provider>);

    const button = getByTestId('list-previous-remove-0')

    console.log(getByTestId)

    fireEvent.press(button)

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      DELETE_LOCATION({id : 1})
    );
})