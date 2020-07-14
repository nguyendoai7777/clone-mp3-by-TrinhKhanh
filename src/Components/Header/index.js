/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import clsx from 'clsx';
import Search from './Search';
import UserProfile from './UserProfile';
import Menu from './Menu';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
Header.propTypes = {
    // miniHeaderStatus: PropTypes.bool
};
function Header(props) {
    const [state, setState] = useState({
        fullHeightHeader: true,
        prevPosition: window.pageYOffset,
    });
    const [openMenu, setOpenMenu] = useState(false);

    let handleScroll = () => {
        let position = window.pageYOffset;
        const { prevPosition } = state;
        setState({
            fullHeightHeader: position <= prevPosition,
            prevPosition: position,
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', debounce(handleScroll, 100), {
            passive: true,
        });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const { fullHeightHeader } = state;
    return (
        <header>
            <div className="container">
                <div className="row no-padding">
                    <div className="col-4 col-md-2">
                        <h1 className="wr-logo">
                            <Link className="logo" to="/">
                                Zing Mp3
                            </Link>
                        </h1>
                    </div>
                    <div className={clsx('wr-search col-6 col-md-7', fullHeightHeader ? '' : 'pull-right')} id="wr-search">
                        <Search fullHeightHeader={fullHeightHeader} />
                    </div>
                    <div className="col-md-3  d-none d-md-block">
                        <UserProfile fullHeightHeader={fullHeightHeader} />
                    </div>
                    <div className="d-none d-md-block" style={fullHeightHeader ? {} : { position: 'absolute', top: 5, left: '29%' }}>
                        <Menu fullHeightHeader={fullHeightHeader} />
                    </div>
                    <div className="d-md-none col-2 mobile-menu-icon">
                        <i className="fas fa-bars text-white" onClick={() => setOpenMenu(true)}></i>
                        <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
                            <div className=" close-btn ">
                                <i class="fas fa-times" onClick={() => setOpenMenu(false)}></i>
                            </div>
                            <Menu fullHeightHeader={fullHeightHeader} isMobileMenu={true} />
                        </Drawer>
                    </div>
                </div>
            </div>
        </header>
    );
}
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
