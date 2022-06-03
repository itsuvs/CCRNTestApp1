import {jest} from '@jest/globals'
import 'react-native'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
)