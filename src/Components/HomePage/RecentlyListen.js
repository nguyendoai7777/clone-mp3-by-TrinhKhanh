import React from 'react';
import Slider from 'react-slick';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const settings = {
    dots: false,
    arrows: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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

export const ListBox = ({ listRecentlyListen, ...props }) => {
    const handleSelectAlbum = (e) => {
        e.preventDefault();
        props.addAlbumToQueue();
    };
    return (
        <div className="box">
            <div className="box-title">{listRecentlyListen.name}</div>
            <Slider {...settings}>
                {listRecentlyListen.items.map((item) => (
                    <Link to={item.url} className="card-item" key={listRecentlyListen.id}>
                        <div className="card-thumb">
                            <img src={item.image} alt="img" />
                            <div className="overlay">
                                <div className="list-btn">
                                    <i className="far fa-heart"></i>
                                    <i className="far fa-play-circle" onClick={handleSelectAlbum}></i>
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card-info">
                            <span className="card-title">{item.name}</span>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

function RecentlyListen(props) {
    return (
        <section id="recently-listen">
            <div className="container">
                <ListBox {...props} />
            </div>
        </section>
    );
}

export default RecentlyListen;
