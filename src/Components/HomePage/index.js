import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MainSlider from './MainSlider';
import './style.scss';
import LoginBanner from './LoginBanner';
import RecentlyListen from './RecentlyListen';
import Chart from './Chart';
import WeekChart from './WeekChart';
import ZingChoice from './ZingChoice';
import NewRelease from './NewRelease';
import Lazy from 'react-lazyload';
import NewSong from './NewSong';
HomePage.propTypes = {
    listSlider: PropTypes.array,
    listRecentlyListen: PropTypes.array,
};

function HomePage(props) {
    const { listSlider, listRecentlyListen, addSongToQueue } = props;
    return (
        <Fragment>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <MainSlider listSlider={listSlider} />
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <LoginBanner />
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <RecentlyListen listRecentlyListen={listRecentlyListen[0]} addAlbumToQueue={props.addAlbumToQueue} />
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <RecentlyListen listRecentlyListen={listRecentlyListen[1]} addAlbumToQueue={props.addAlbumToQueue}/>
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <RecentlyListen listRecentlyListen={listRecentlyListen[2]} addAlbumToQueue={props.addAlbumToQueue}/>
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <Chart />
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <WeekChart />
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <ZingChoice />
            </Lazy>{' '}
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <RecentlyListen listRecentlyListen={listRecentlyListen[3]} addAlbumToQueue={props.addAlbumToQueue} />
            </Lazy>{' '}
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <NewRelease {...props}/>
            </Lazy>
            <Lazy offset={[-50, 0]} height={100} once={true}>
                <NewSong {...props} />
            </Lazy>
        </Fragment>
    );
}

export default HomePage;
