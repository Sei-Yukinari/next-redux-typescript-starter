import { combineReducers } from 'redux'
import * as app from './app'
import * as auth from './auth'

export interface RootState {
  app: app.AppState
}
export type AllAction = app.AppAction

export const rootReducer = combineReducers({
  app: app.reducer,
  auth: auth.reducer,
})
