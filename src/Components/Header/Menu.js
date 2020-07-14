import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

const SubMenu = (props) => {
    return (
        <div className="sub-menu">
            <div className="row no-padding">
                <div className="col-md-3">
                    <div className="title-group">REALTIME</div>
                    <ul>
                        <li>
                            <a href="/a">Bài hát</a>
                        </li>
                        <li>
                            <a href="/a">MV</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="title-group">REALTIME</div>
                    <ul>
                        <li>
                            <a href="/a">Bài hát</a>
                        </li>
                        <li>
                            <a href="/a">MV</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="title-group">REALTIME</div>
                    <ul>
                        <li>
                            <a href="/a">Bài hát</a>
                        </li>
                        <li>
                            <a href="/a">MV</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className="title-group">REALTIME</div>
                    <ul>
                        <li>
                            <a href="/a">Bài hát</a>
                        </li>
                        <li>
                            <a href="/a">MV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Menu.propTypes = {
    fullHeightHeader: PropTypes.bool.isRequired,
    isMobileMenu: PropTypes.bool,
};

function Menu(props) {
    const { fullHeightHeader, isMobileMenu } = props;
    return (
        <nav className={clsx('wr-menu', isMobileMenu ? 'mobile-menu' : '')}>
            <ul>
                <li className={fullHeightHeader ? '' : 'hide'}>
                    <NavLink to="/">Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to="/zing-chart">#zingchart</NavLink>
                    {isMobileMenu ? '' : <SubMenu />}
                </li>
                <li>
                    <NavLink to="/new-release">mới phát hành</NavLink>
                </li>
                <li>
                    <NavLink to="/top-100">Top 100</NavLink>
                </li>
                <li>
                    <NavLink to="/chu-de">Chủ đề</NavLink>
                </li>
                <li className={fullHeightHeader ? '' : 'hide'}>
                    <NavLink to="/mv">MV</NavLink>
                </li>
                <li className={fullHeightHeader ? '' : 'hide'}>
                    <NavLink to="/the-loai-album">Album</NavLink>
                </li>
                <li className={fullHeightHeader ? '' : 'hide'}>
                    <NavLink to="/artist">Nghệ sĩ</NavLink>
                </li>
                <li>
                    <NavLink to="/">Nhạc cá nhân</NavLink>
                </li>
                <li className={fullHeightHeader ? '' : 'hide'}>
                    <NavLink to="/">VIP</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
