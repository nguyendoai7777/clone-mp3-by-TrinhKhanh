import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
Search.propTypes = { fullHeightHeader: PropTypes.bool.isRequired };

function Search(props) {
    const [showAutoComplete, setShowAutoComplete] = useState(false);

    const handleClick = () => {
        let wrInput = document.getElementById('wr-search');
        if (wrInput.classList.contains('pull-right')) {
            wrInput.classList.remove('pull-right');
        }
    };
    return (
        <ClickAwayListener
            onClickAway={() => {
                setShowAutoComplete(false);
                if (!props.fullHeightHeader) {
                    let wrInput = document.getElementById('wr-search');
                    wrInput.classList.add('pull-right');
                }
            }}
        >
            <div className={clsx('wr-input')} id="wr-input">
                <form>
                    <i
                        className="fas fa-search search-icon"
                        onClick={handleClick}
                    ></i>
                    <input
                        type="text"
                        className="search-text"
                        placeholder="Nhập tên bài hát, ca sĩ hoặc MV..."
                        onFocus={() => setShowAutoComplete(true)}
                    />
                </form>
                <div
                    className={clsx(
                        'wr-autocomplete',
                        showAutoComplete ? 'show' : ''
                    )}
                >
                    <ul>
                        <li>
                            <i className="fas fa-chart-line    "></i>
                            <a href="/a">không thể cùng nhau</a>
                        </li>
                        <li>
                            <i className="fas fa-chart-line    "></i>
                            <a href="/a">không thể cùng nhau</a>
                        </li>
                        <li>
                            <i className="fas fa-chart-line    "></i>
                            <a href="/a">không thể cùng nhau</a>
                        </li>
                        <li>
                            <i className="fas fa-chart-line    "></i>
                            <a href="/a">không thể cùng nhau</a>
                        </li>
                    </ul>
                </div>
            </div>
        </ClickAwayListener>
    );
}

export default Search;
