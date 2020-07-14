import * as Types from './../Constants/ActionTypes';
var initialState = {
    list: [],
};

const MainSlider = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_LIST_SLIDER:
            return { ...state, list: action.payload.list };
        default:
            return { ...state };
    }
};
export default MainSlider;
