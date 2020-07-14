import * as Types from './../Constants/ActionTypes';
import { listSlider, listRecentlyListen, playList } from './../Constants/InitialData';
export const fetchListSlider = () => {
    return {
        type: Types.FETCH_LIST_SLIDER,
        payload: {
            list: listSlider
        },
    };
};
export const fetchListRecentlyListen = () => {
    return {
        type: Types.FETCH_LIST_RECENTLY_LISTEN,
        payload: {
            list: listRecentlyListen
        },
    };
};

export const nextOrPrevSong = (act) => {
    return {
        type: Types.NEXT_OR_PREV_SONG,
        payload: {
            act
        }
    }
}

export const removePlaylist = (songId) => {
    return {
        type: Types.REMOVE_PLAYLIST,
        payload: {
            songId
        }
    }
}

export const addSongToQueue = (songId) => {
    const index = playList.findIndex(song => song.id === songId);
    return {
        type: Types.ADD_SONG_TO_QUEUE,
        payload: {
            song: playList[index]
        }
    }
}
export const addAlbumToQueue = () => {
    return {
        type: Types.ADD_ALBUM_TO_QUEUE,
        payload: {
            album: playList
        }
    }
}