import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer, { UserState } from './userReducer';

// Define the root state shape explicitly
export interface RootState {
    data: UserState;
}

// Create the root reducer
const rootReducer = combineReducers<RootState>({
    data: userReducer, // The key should match the RootState's shape
});

// Create the store with the root reducer and thunk middleware
export const store = createStore(rootReducer, applyMiddleware(thunk));

// Export the RootState type
export type { RootState };
