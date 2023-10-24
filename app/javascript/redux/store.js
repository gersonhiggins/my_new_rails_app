import { createStore } from 'redux';
import greetingReducer from './reducers/greetingReducer';

const store = createStore(greetingReducer);

export default store;