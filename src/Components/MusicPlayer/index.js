import React from 'react';
import './style.scss';
import useSongAction from './../../Hooks/useSongActions';
import clsx from 'clsx';
import Playlist from './Playlist';
const convertTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    return min + ':' + sec;
};
function MusicPlayer(props) {
    const { nextOrPrevSong, nowPlaying, playList } = props;
    const [playing, toggle, currentTime, handleSeek, handleChangeVolume, volume, toggleMute] = useSongAction(nowPlaying, playList,{nextOrPrevSong});
    console.log(currentTime)
    return (
        <section id="music-player" className={nowPlaying && Object.keys(nowPlaying).length ? 'show' : 'hide'}>
            <div className="container">
                <div className="wr-music-player">
                    <div className="row no-padding">
                        <div className="col-md-3">
                            <div className="controller">
                                <i className="fas fa-caret-left" onClick={() => nextOrPrevSong('prev')}></i>
                                <i
                                    className={clsx('fas', playing ? 'fa-pause-circle' : 'fa-play-circle')}
                                    onClick={toggle}
                                ></i>
                                <i className="fas fa-caret-right" onClick={() => nextOrPrevSong('next')}></i>
                                <i className="fas fa-random"></i>
                                <i className="fas fa-redo"></i>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="player">
                                <img src={nowPlaying.thumb} alt="" />
                                <div>
                                    <div className="info">
                                        <span className="song-name">{nowPlaying.songName}</span> -
                                        <span className="artist"> {nowPlaying.artist}</span>
                                    </div>
                                    <div className="duration">
                                        <strong>{convertTime(currentTime)}</strong> / {convertTime(nowPlaying.duration)}
                                    </div>
                                    <input
                                        type="range"
                                        name="player"
                                        id="player"
                                        max={nowPlaying ? nowPlaying.duration : ''}
                                        value={currentTime}
                                        onChange={handleSeek}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="actions">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-video"></i>
                                <i className="fas fa-microphone"></i>
                                <div className="volume">
                                    <i
                                        className={clsx(
                                            'fas',
                                            +volume === 0
                                                ? 'fa-volume-mute'
                                                : +volume < 50
                                                ? 'fa-volume-down'
                                                : 'fa-volume-up'
                                        )}
                                        onClick={toggleMute}
                                    ></i>
                                    <div>
                                        <input
                                            type="range"
                                            name="volume"
                                            min="0"
                                            max="100"
                                            value={volume}
                                            onChange={handleChangeVolume}
                                        />
                                    </div>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <Playlist {...props} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MusicPlayer;
