import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import commonSlice from './slices/index'

const store = configureStore({ reducer: commonSlice })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store