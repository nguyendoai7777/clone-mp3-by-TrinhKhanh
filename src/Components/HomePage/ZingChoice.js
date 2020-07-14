import React from 'react';
import Slider from 'react-slick';
const settings = {
    dots: false,
    arrows: false,
    lazyLoad: 'ondemand',
    infinite: true,
    swipe: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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

const listZingChoice = [
    {
        id: 1,
        name: 'Justatee',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg',
        url: '/zing-choice',
    },
    {
        id: 2,
        name: 'Justatee',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg',
        url: '/zing-choice',
    },
    {
        id: 3,
        name: 'Justatee',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg',
        url: '/zing-choice',
    },
    {
        id: 4,
        name: 'Justatee',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg',
        url: '/zing-choice',
    },
    {
        id: 5,
        name: 'Justatee',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg',
        url: '/zing-choice',
    },
    {
        id: 6,
        name: 'Justatee',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg',
        url: '/zing-choice',
    },
];
function ZingChoice(props) {
    return (
        <section id="zing-choice">
            <div className="container">
                <div className="wr-slider">
                    <Slider {...settings}>
                        {listZingChoice.map((item) => (
                            <div className="slide-item" key={item.id}>
                                <a href={item.url}>
                                    <div className="thumb">
                                        <img
                                            src={item.thumb}
                                            alt="zing choice"
                                        />
                                    </div>
                                    <div className="info">
                                        <span className="info1">
                                            #ZING CHOICE
                                        </span>
                                        <span className="info2">
                                            {item.name}
                                        </span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ZingChoice;
