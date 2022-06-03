import 'react-native'
import React from 'react'
import AllClear from '../src/components/AllClear'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react-native'
import {CLEAR_ALL} from '../src/redux/actions'

it('dispatches all clear action perfectly', () => {
   
    afterEach(() => {
        jest.resetAllMocks()
        cleanup()
    })

    const mockStore = configureStore()
    const initialState = {
      locationArray: [],
      currentLocation: {}
    }

    let store = mockStore(initialState)

    store.dispatch = jest.fn()

    const {getByTestId} = render(
        <Provider store={store}>
            <AllClear />
        </Provider>);

    const button = getByTestId('list-clear-all-button')

    fireEvent.press(button)

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      CLEAR_ALL()
    );
})