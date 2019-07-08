import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

import * as Server from '../../utils/server';

// Acion types
const SET = 'item/SET';

export const set = createAction(SET);

export const get = () => async (dispatch) => {
    try {
        let data = await Server.getData();
        dispatch(set(data));
    } catch (error) {
        console.log('Error to get news item', error);
    }
}

const initialState = Map({
    data: Map({})
});

export default handleActions({
    [SET]: (state, action) => {
        return state.set('data', action.payload);
    }
}, initialState)

