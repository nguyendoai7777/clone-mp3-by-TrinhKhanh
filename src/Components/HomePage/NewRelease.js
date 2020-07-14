import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const settings = {
    dots: false,
    arrows: true,
    lazyLoad: 'ondemand',
    infinite: false,
    swipe: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            },
        },
    ],
};
function CustomNextArrow(props) {
    const { onClick } = props;
    return (
        <div className={clsx('custom-next')} onClick={onClick}>
            <i className="fas fa-chevron-right text-white"></i>
        </div>
    );
}

function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={clsx('custom-prev')} onClick={onClick}>
            <i className="fas fa-chevron-left text-white"></i>
        </div>
    );
}
NewRelease.propTypes = {};

function NewRelease(props) {
    return (
        <section id="new-release">
            <div className="container">
                <div className="title"> Mới phát hành </div>
                <div className="wrapper">
                    <Slider {...settings}>
                        <div className="slider-item">
                            <Link to="/album/album-detail.html">
                                <div className="thumb">
                                    <img
                                        src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/6/a/b/f6ab94cda33ac9c190a7ac8cd0315270.jpg"
                                        alt=""
                                    />
                                    <div className="overlay" onClick={(e)=>{e.preventDefault(); props.addAlbumToQueue()}}>
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="info-top">
                                        <div className="song-name">
                                            <span href="/b">Tinh Anh</span>
                                        </div>
                                        <div className="artist">
                                            <span href="/sdf">Đinh dũng</span>
                                        </div>
                                    </div>
                                    <div className="sort">#1</div>
                                    <div className="date">20.04.2020</div>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/album/album-detail.html">
                                <div className="thumb">
                                    <img
                                        src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/6/a/b/f6ab94cda33ac9c190a7ac8cd0315270.jpg"
                                        alt=""
                                    />
                                    <div className="overlay" onClick={(e)=>{e.preventDefault(); props.addAlbumToQueue()}}>
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="info-top">
                                        <div className="song-name">
                                            <span href="/b">Tinh Anh</span>
                                        </div>
                                        <div className="artist">
                                            <span href="/sdf">Đinh dũng</span>
                                        </div>
                                    </div>
                                    <div className="sort">#1</div>
                                    <div className="date">20.04.2020</div>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/album/album-detail.html">
                                <div className="thumb">
                                    <img
                                        src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/6/a/b/f6ab94cda33ac9c190a7ac8cd0315270.jpg"
                                        alt=""
                                    />
                                    <div className="overlay" onClick={(e)=>{e.preventDefault(); props.addAlbumToQueue()}}>
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="info-top">
                                        <div className="song-name">
                                            <span href="/b">Tinh Anh</span>
                                        </div>
                                        <div className="artist">
                                            <span href="/sdf">Đinh dũng</span>
                                        </div>
                                    </div>
                                    <div className="sort">#1</div>
                                    <div className="date">20.04.2020</div>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/album/album-detail.html">
                                <div className="thumb">
                                    <img
                                        src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/6/a/b/f6ab94cda33ac9c190a7ac8cd0315270.jpg"
                                        alt=""
                                    />
                                    <div className="overlay" onClick={(e)=>{e.preventDefault(); props.addAlbumToQueue()}}>
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="info-top">
                                        <div className="song-name">
                                            <span href="/b">Tinh Anh</span>
                                        </div>
                                        <div className="artist">
                                            <span href="/sdf">Đinh dũng</span>
                                        </div>
                                    </div>
                                    <div className="sort">#1</div>
                                    <div className="date">20.04.2020</div>
                                </div>
                            </Link>
                        </div>
                        <div className="slider-item">
                            <Link to="/album/album-detail.html">
                                <div className="thumb">
                                    <img
                                        src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/6/a/b/f6ab94cda33ac9c190a7ac8cd0315270.jpg"
                                        alt=""
                                    />
                                    <div className="overlay" onClick={(e)=>{e.preventDefault(); props.addAlbumToQueue()}}>
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="info-top">
                                        <div className="song-name">
                                            <span href="/b">Tinh Anh</span>
                                        </div>
                                        <div className="artist">
                                            <span href="/sdf">Đinh dũng</span>
                                        </div>
                                    </div>
                                    <div className="sort">#1</div>
                                    <div className="date">20.04.2020</div>
                                </div>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default NewRelease;
