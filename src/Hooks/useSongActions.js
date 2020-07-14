import { useState, useEffect, useRef } from 'react';
const useSongAction = (nowPlaying, playList, actions) => {
    const audio = useRef(new Audio());
    const [playing, setPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(100);
    const [loop, setLoop] = useState('none');
    const toggle = () => {
        setPlaying(!playing);
    };
    const handleSeek = (e) => {
        audio.current.currentTime = e.target.value;
    };
    const handleChangeVolume = (e) => {
        setVolume(e.target.value);
        console.log(e.target.value);
    };
    const toggleMute = () => {
        volume > 0 ? setVolume(0) : setVolume(100);
        console.log(volume);
    };
    useEffect(() => {
        audio.current.src = nowPlaying.src;
        audio.current.load();
    }, [nowPlaying.src]);
    useEffect(() => {
        audio.current.volume = volume / 100;
    }, [volume]);
    useEffect(() => {
        playing ? audio.current.play() : audio.current.pause();
        let obj = setInterval(() => {
            setCurrentTime(Math.round(audio.current.currentTime));
            if (!playing) {
                clearInterval(obj);
            }
            if (audio.current.currentTime >= audio.current.duration) {
                if (loop === 'single') {
                    audio.current.play();
                } else if (loop === 'list') {
                    actions.nextOrPrevSong('next');
                } else {
                    clearInterval(obj);
                    setPlaying(false);
                }
            }
        }, 1000);
        return () => {
            clearInterval(obj);
        };
    }, [playing, nowPlaying.src]);
    return [playing, toggle, currentTime, handleSeek, handleChangeVolume, volume, toggleMute];
};
export default useSongAction;
