import React from 'react'
import {render} from '@testing-library/react-native'
import CurrentLocation from '../src/components/CurrentLocation'
import * as reactRedux from 'react-redux'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect';

describe('Test group for CurrentLocation component', () => {

    const mockStore = configureStore()

    const initialState = {
       locationArray: [{
           id: 1,
           location_name: 'Location One',
           time: '00:00'
       }],
       currentLocation: {}
    };

    const store = mockStore(initialState)

    it('prefectly renders data from the redux store', () => {
        const {getByText} = render(
        <Provider store={store}>
            <CurrentLocation/>
        </Provider>)
        expect(getByText('Location One')).toBeTruthy()
        expect(getByText('00:00')).toBeTruthy();
    })
})