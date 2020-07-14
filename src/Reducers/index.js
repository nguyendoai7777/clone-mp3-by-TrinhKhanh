import { combineReducers } from 'redux';
import Ui from './Ui';
import MainSlider from './MainSlider';
import Data from './Data';
import Player from './Player';
const appReducers = combineReducers({
    Ui,
    MainSlider,
    Data,
    Player,
});
export default appReducers;
