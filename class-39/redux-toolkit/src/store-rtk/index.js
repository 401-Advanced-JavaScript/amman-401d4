import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import peopleSlice from './people.store';
// combine Reducers -> from slicers 
const reducers = combineReducers({people: peopleSlice})

const store = configureStore({ reducer: reducers});

export default store;