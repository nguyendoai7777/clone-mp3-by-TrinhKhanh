import React, { useState } from 'react';
import clsx from 'clsx';
const convertTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    return min + ':' + sec;
};
function Playlist(props) {
    const [showPlaylist, setShowPlaylist] = useState(false);

    const { playlist, nowPlaying, removePlaylist } = props;
    return (
        <div className="playlist">
            <button onClick={() => setShowPlaylist(!showPlaylist)}>Danh sách phát({playlist.length})</button>
            <div className={clsx('list-item', showPlaylist ? 'show' : '')}>
                <div className="list-header">
                    <span>Danh sách phát ({playlist.length})</span>
                    <div>
                        <i className="fas fa-trash    " onClick={() => removePlaylist('all')}></i>
                        <i className="fas fa-angle-down    " onClick={() => setShowPlaylist(false)}></i>
                    </div>
                </div>
                <ul>
                    {playlist.map((item) => (
                        <li className={clsx('item', item.id === nowPlaying.id ? 'playing' : '')} key={item.id}>
                            <div className="thumb">
                                <img src={item.thumb} alt="" />
                            </div>
                            <div className="item-info">
                                <span className="name">{item.songName}</span>
                                <span className="artist">{item.artist}</span>
                            </div>
                            <div className="duration">
                                <span>{convertTime(item.duration)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Playlist;
