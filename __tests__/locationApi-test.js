/**
 * @format
 */

 import 'react-native';
 import {getLocationPermission, getCoordinates, reverseGeoCode} from '../src/apis/locationApi';
 
describe('Location api tests', () => {

    jest.mock(`../src/mocks/index.js`, () => jest.fn());

    it('asks for location permission', async () => {

        const locationPermissionResponse = await getLocationPermission()
        expect(JSON.stringify(locationPermissionResponse)).toBe('{"status":"restricted"}')
 
    });

    it('gets coordinates', async() => {

    })
})
 