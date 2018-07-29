import axios from 'axios';
import { FETCH_USER } from './types';

// Using redux-thunk inside action creator
// Redux-thunk middleware applied to store (client/index.js) checks wheter 
// action creator returns object/action or function/ as below
// if it returns function than redux-thunk inserts dispatch()

// export const fetchUser = () => {
//     return function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }));
//     };
// };

// Refactored version - if arrow function contains only single expression
// we can drop {} and 'return' keyword and more ...
export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
        const res = await axios.post('/api/stripe', token)
        dispatch({ type: FETCH_USER, payload: res.data });
};