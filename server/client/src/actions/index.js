import axios from 'axios';
import { FETCH_USER } from './types';

// Using redux-thunk inside action creator
// Redux-thunk middleware applied to store (client/index.js) checks wheter 
// action creator returns object/action or function/ as below
// if it returns function than redux-thunk inserts dispatch()
const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};