/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import LocationList from './src/screens/LocationList';
import MapView from './src/screens/MapView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MapView" component={MapView} />
          <Stack.Screen name="LocationList" component={LocationList} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;