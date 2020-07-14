import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import defaultAvt from './../../Assets/images/default.png';
UserProfile.propTypes = {
    fullHeightHeader: PropTypes.bool.isRequired,
};

function UserProfile(props) {
    return (
        <Fragment>
            <div className="wr-user-profile">
                <div className="icon-upload">
                    <i className="fas fa-upload "></i>
                </div>
                <div className="icon-notify">
                    <i className="fas fa-bell"></i>
                </div>
                <div className="wr-login">
                    <img src={defaultAvt} alt="default avatar" />
                    <a href="/login" className={props.fullHeightHeader ? '' : 'd-none'}>
                        Đăng nhập
                    </a>
                    <i className="fas fa-angle-down    "></i>
                </div>
            </div>
        </Fragment>
    );
}

export default UserProfile;
