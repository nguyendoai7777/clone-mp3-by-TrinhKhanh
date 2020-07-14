import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
MainSlider.propTypes = {
    listSlider: PropTypes.array,
};

function MainSlider(props) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const { listSlider } = props;
    return (
        <section id="main-slider">
            <div className="container">
                <Slider {...settings}>
                    {listSlider.map((item) => (
                        <div className="main-slider-item" key={item.id}>
                            <img src={item.src} alt="sliderimg" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default MainSlider;
