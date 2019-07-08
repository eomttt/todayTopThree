import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import modules from '../reducers';

const create = () => {
    return createStore(modules, applyMiddleware(ReduxThunk))
}

export default create;
