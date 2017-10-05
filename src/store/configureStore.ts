import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools'
import RootReducer from '../reducers/index'
import { autoRehydrate } from 'redux-persist'
import { History } from 'history'

const isDebuggingInChrome = !!window.navigator.userAgent

export default function (initialState = {}, history: History) {
  return createStore(
    RootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunk,
      routerMiddleware(history),
      createLogger({
        predicate: () => isDebuggingInChrome,
        collapsed: true,
        duration: true,
      }),
    ), autoRehydrate()),
  )
}