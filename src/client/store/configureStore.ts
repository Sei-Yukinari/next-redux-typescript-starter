import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { RootState, rootReducer } from '../reducers'

export const configureStore = (initialState: RootState) =>
  createStore(rootReducer, initialState, devToolsEnhancer({}))
