import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HomePage } from './../Components';
import { connect } from 'react-redux';
import { fetchListSlider, fetchListRecentlyListen, addSongToQueue, addAlbumToQueue } from './../Actions';
HomePageContainer.propTypes = { listSlider: PropTypes.array, listRecentlyListen: PropTypes.array };
function HomePageContainer(props) {
    useEffect(() => {
        props.fetchListSlider();
        props.fetchListRecentlyListen();
    });
    return <HomePage {...props} />;
}
const mapStateToProps = (state) => {
    return {
        listSlider: state.MainSlider.list,
        listRecentlyListen: state.Data.listRecentlyListen,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListSlider: () => {
            dispatch(fetchListSlider());
        },
        fetchListRecentlyListen: () => {
            dispatch(fetchListRecentlyListen());
        },
        addSongToQueue: (songId) => {
            dispatch(addSongToQueue(songId))
        },
        addAlbumToQueue: () => {
            dispatch(addAlbumToQueue());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
