import React from 'react';
import PropTypes from 'prop-types';
// import { HomePageContainer } from './';
import { ROUTES } from './../Routes';
import { Header, Footer, MusicPlayer } from '../Components';
import './../Assets/scss/index.scss';
import LazyLoad from 'react-lazyload';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { nextOrPrevSong, removePlaylist } from './../Actions';
App.propTypes = {
    nowPlaying: PropTypes.object,
    playlist: PropTypes.array,
};

const listRoute = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.main} key={route.name} />
    ));
    return xhtml;
};

function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <LazyLoad offset={[-50, 0]} height={200} once={true}>
                    <Header />
                </LazyLoad>
                <div id="site-content" style={{ marginTop: 110 }}>
                    <LazyLoad offset={[-50, 0]} height={200} once={true}>
                        <Switch>{listRoute()}</Switch>
                    </LazyLoad>
                </div>
                <LazyLoad offset={[-50, 0]} height={200} once={true}>
                    <Footer />
                </LazyLoad>
                <MusicPlayer
                    nextOrPrevSong={(act) => props.nextOrPrevSong(act)}
                    nowPlaying={props.nowPlaying}
                    playlist={props.playlist}
                    removePlaylist={props.removePlaylist}
                />
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        nowPlaying: state.Player.nowPlaying,
        playlist: state.Player.playlist,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        nextOrPrevSong: (act) => {
            dispatch(nextOrPrevSong(act));
        },
        removePlaylist: (songId) => {
            dispatch(removePlaylist(songId))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
