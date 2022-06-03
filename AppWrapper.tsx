import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './src/redux/store'
import App from './App';

export default function AppWrapper() {
  
  const store = configureStore();

  return (
    <Provider store={store}>
        <App/>
    </Provider>
  )
}
