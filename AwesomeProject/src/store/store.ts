import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    data: userReducer
})

export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>