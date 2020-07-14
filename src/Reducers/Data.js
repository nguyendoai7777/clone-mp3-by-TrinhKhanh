import * as Types from './../Constants/ActionTypes';
var initialState = {
    listRecentlyListen: [],
};

const Data = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_LIST_RECENTLY_LISTEN:
            return { ...state, listRecentlyListen: action.payload.list };
        default:
            return { ...state };
    }
};
export default Data;
