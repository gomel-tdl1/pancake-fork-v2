// eslint-disable-next-line @typescript-eslint/no-shadow
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import application from './application/reducer'
import { updateVersion } from './global/actions'
import user from './user/reducer'
import lists from './lists/reducer'
import multicall from './multicall/reducer'
// eslint-disable-next-line import/no-cycle
import protocol from './protocol/reducer'
// eslint-disable-next-line import/no-cycle
import tokens from './tokens/reducer'
// eslint-disable-next-line import/no-cycle
import pools from './pools/reducer'

const PERSISTED_KEYS: string[] = ['user', 'lists']

const store = configureStore({
  reducer: {
    application,
    user,
    multicall,
    lists,
    protocol,
    tokens,
    pools,
  },
  middleware: [...getDefaultMiddleware({ thunk: false, immutableCheck: false }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS }),
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch