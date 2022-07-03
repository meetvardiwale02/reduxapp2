import changeNumber from './upDown';

import { combineReducers } from 'redux';

const rootReducers = combineReducers ({
    changeNumber:changeNumber
});

export default rootReducers;