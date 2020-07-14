import * as Types from './../Constants/ActionTypes';
// import {findIndex} from 'lodash'
var initialState = {
    nowPlaying: {},
    playlist: [],
};

const Player = (state = initialState, action) => {
    switch (action.type) {
        case Types.NEXT_OR_PREV_SONG:
            const index = state.playlist.findIndex((item) => item.id === state.nowPlaying.id);
            console.log(index);
            if (action.payload.act === 'next') {
                if (index < state.playlist.length - 1) {
                    return { ...state, nowPlaying: state.playlist[index + 1] };
                } else return { ...state, nowPlaying: state.playlist[0] };
            } else {
                if (index > 0) {
                    return { ...state, nowPlaying: state.playlist[index - 1] };
                } else return { ...state, nowPlaying: state.playlist[state.playlist.length - 1] };
            }
        case Types.REMOVE_PLAYLIST:
            if (action.payload.songId === 'all') {
                return { ...state, playlist: [], nowPlaying: {} };
            } else {
                const songIndex = state.playlist.findIndex((item) => item.id === action.payload.songId);
                return { ...state, playlist: state.playlist.splice(songIndex, 1) };
            }
        case Types.ADD_SONG_TO_QUEUE:
            return { ...state, nowPlaying: action.payload.song, playlist: [action.payload.song] };
        case Types.ADD_ALBUM_TO_QUEUE:
            return { ...state, nowPlaying: action.payload.album[0], playlist: action.payload.album };
        default:
            return { ...state };
    }
};
export default Player;
