import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import clsx from 'clsx';

const listSong = [
    {
        id: 1,
        name: 'Em Không Sai Chúng Ta Sai',
        artist: 'Erik',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg',
        data: [
            [Date.UTC(null, null, null, 0), 1],
            [Date.UTC(null, null, null, 1), 4],
            [Date.UTC(null, null, null, 2), 7],
            [Date.UTC(null, null, null, 3), 5],
            [Date.UTC(null, null, null, 4), 9],
            [Date.UTC(null, null, null, 5), 13],
            [Date.UTC(null, null, null, 6), 12],
            [Date.UTC(null, null, null, 7), 13],
            [Date.UTC(null, null, null, 8), 14],
            [Date.UTC(null, null, null, 9), 16],
            [Date.UTC(null, null, null, 10), 19],
            [Date.UTC(null, null, null, 11), 18],
            [Date.UTC(null, null, null, 12), 8],
            [Date.UTC(null, null, null, 13), 4],
            [Date.UTC(null, null, null, 14), 3],
            [Date.UTC(null, null, null, 15), 12],
            [Date.UTC(null, null, null, 16), 13],
            [Date.UTC(null, null, null, 17), 13],
            [Date.UTC(null, null, null, 18), 14],
            [Date.UTC(null, null, null, 19), 15],
            [Date.UTC(null, null, null, 20), 17],
            [Date.UTC(null, null, null, 21), 13],
            [Date.UTC(null, null, null, 22), 12],
            [Date.UTC(null, null, null, 23), 11],
        ],
    },
    {
        id: 2,
        name: 'Không Thể Cùng Nhau Suốt Kiếp',
        artist: 'Hòa Minzy',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/7/8/6/17861cfa5213a52daec2c556101fb421.jpg',
        data: [
            [Date.UTC(null, null, null, 0), 5],
            [Date.UTC(null, null, null, 1), 1],
            [Date.UTC(null, null, null, 2), 7],
            [Date.UTC(null, null, null, 3), 5],
            [Date.UTC(null, null, null, 4), 2],
            [Date.UTC(null, null, null, 5), 23],
            [Date.UTC(null, null, null, 6), 22],
            [Date.UTC(null, null, null, 7), 33],
            [Date.UTC(null, null, null, 8), 14],
            [Date.UTC(null, null, null, 9), 26],
            [Date.UTC(null, null, null, 10), 29],
            [Date.UTC(null, null, null, 11), 28],
            [Date.UTC(null, null, null, 12), 1],
            [Date.UTC(null, null, null, 13), 5],
            [Date.UTC(null, null, null, 14), 3],
            [Date.UTC(null, null, null, 15), 22],
            [Date.UTC(null, null, null, 16), 23],
            [Date.UTC(null, null, null, 17), 23],
            [Date.UTC(null, null, null, 18), 34],
            [Date.UTC(null, null, null, 19), 25],
            [Date.UTC(null, null, null, 20), 22],
            [Date.UTC(null, null, null, 21), 23],
            [Date.UTC(null, null, null, 22), 32],
            [Date.UTC(null, null, null, 23), 31],
        ],
    },
    {
        id: 3,
        name: 'Thích thì đến',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/4/4/6/b4461d303cba114b38429c6ea84d9fa2.jpg',
        artist: 'Lê bảo bình',
        data: [
            [Date.UTC(null, null, null, 0), 6],
            [Date.UTC(null, null, null, 1), 2],
            [Date.UTC(null, null, null, 2), 11],
            [Date.UTC(null, null, null, 3), 15],
            [Date.UTC(null, null, null, 4), 29],
            [Date.UTC(null, null, null, 5), 33],
            [Date.UTC(null, null, null, 6), 22],
            [Date.UTC(null, null, null, 7), 3],
            [Date.UTC(null, null, null, 8), 24],
            [Date.UTC(null, null, null, 9), 6],
            [Date.UTC(null, null, null, 10), 11],
            [Date.UTC(null, null, null, 11), 12],
            [Date.UTC(null, null, null, 12), 13],
            [Date.UTC(null, null, null, 13), 14],
            [Date.UTC(null, null, null, 14), 23],
            [Date.UTC(null, null, null, 15), 11],
            [Date.UTC(null, null, null, 16), 23],
            [Date.UTC(null, null, null, 17), 23],
            [Date.UTC(null, null, null, 18), 22],
            [Date.UTC(null, null, null, 19), 11],
            [Date.UTC(null, null, null, 20), 12],
            [Date.UTC(null, null, null, 21), 7],
            [Date.UTC(null, null, null, 22), 5],
            [Date.UTC(null, null, null, 23), 2],
        ],
    },
    {
        id: 4,
        name: 'Em Không Sai Chúng Ta Sai',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg',
        data: [
            [Date.UTC(null, null, null, 0), 1],
            [Date.UTC(null, null, null, 1), 4],
            [Date.UTC(null, null, null, 2), 7],
            [Date.UTC(null, null, null, 3), 5],
            [Date.UTC(null, null, null, 4), 9],
            [Date.UTC(null, null, null, 5), 13],
            [Date.UTC(null, null, null, 6), 12],
            [Date.UTC(null, null, null, 7), 13],
            [Date.UTC(null, null, null, 8), 14],
            [Date.UTC(null, null, null, 9), 16],
            [Date.UTC(null, null, null, 10), 19],
            [Date.UTC(null, null, null, 11), 18],
            [Date.UTC(null, null, null, 12), 8],
            [Date.UTC(null, null, null, 13), 4],
            [Date.UTC(null, null, null, 14), 3],
            [Date.UTC(null, null, null, 15), 12],
            [Date.UTC(null, null, null, 16), 13],
            [Date.UTC(null, null, null, 17), 13],
            [Date.UTC(null, null, null, 18), 14],
            [Date.UTC(null, null, null, 19), 15],
            [Date.UTC(null, null, null, 20), 17],
            [Date.UTC(null, null, null, 21), 13],
            [Date.UTC(null, null, null, 22), 12],
            [Date.UTC(null, null, null, 23), 11],
        ],
    },
    {
        id: 5,
        name: 'Em Không Sai Chúng Ta Sai',
        thumb:
            'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg',
        data: [
            [Date.UTC(null, null, null, 0), 1],
            [Date.UTC(null, null, null, 1), 4],
            [Date.UTC(null, null, null, 2), 7],
            [Date.UTC(null, null, null, 3), 5],
            [Date.UTC(null, null, null, 4), 9],
            [Date.UTC(null, null, null, 5), 13],
            [Date.UTC(null, null, null, 6), 12],
            [Date.UTC(null, null, null, 7), 13],
            [Date.UTC(null, null, null, 8), 14],
            [Date.UTC(null, null, null, 9), 16],
            [Date.UTC(null, null, null, 10), 19],
            [Date.UTC(null, null, null, 11), 18],
            [Date.UTC(null, null, null, 12), 8],
            [Date.UTC(null, null, null, 13), 4],
            [Date.UTC(null, null, null, 14), 3],
            [Date.UTC(null, null, null, 15), 12],
            [Date.UTC(null, null, null, 16), 13],
            [Date.UTC(null, null, null, 17), 13],
            [Date.UTC(null, null, null, 18), 14],
            [Date.UTC(null, null, null, 19), 15],
            [Date.UTC(null, null, null, 20), 17],
            [Date.UTC(null, null, null, 21), 13],
            [Date.UTC(null, null, null, 22), 12],
            [Date.UTC(null, null, null, 23), 11],
        ],
    },
];
const listChartSong = listSong.slice(0, 3);
const options = {
    title: {
        text: '',
    },
    colors: [
        '#4a90e2',
        '#50e3c2',
        '#f00000',
        '#910000',
        '#1aadce',
        '#492970',
        '#f28f43',
        '#77a1e5',
        '#c42525',
        '#a6c96a',
    ],
    chart: {
        backgroundColor: 'transparent',
        type: 'spline',
        height: 320,
        marginLeft: 20,
        marginRight: 20,
    },
    tooltip: {
        headerFormat: '',
        pointFormat: 'Thời gian: {point.x:%H}h',
        crosshairs: true,
        shared: false,
    },
    credits: {
        enabled: false,
    },
    plotOptions: {
        spline: {
            lineWidth: 2,
            marker: {
                enabled: false,
            },
            states: {
                hover: {
                    lineWidth: 3,
                    marker: {
                        enabled: true,
                    },
                },
            },
        },
    },
    yAxis: {
        title: {
            enabled: false,
        },
        gridLineWidth: 0,
        labels: 0,
    },
    xAxis: {
        title: {
            enabled: false,
        },
        type: 'datetime',
        dateTimeLabelFormats: {
            hour: '%H',
        },
        endOnTick: false,
        units: [['hour', [2]]],
        lineWidth: 0,
    },
    series: listChartSong,
    legend: {
        enabled: false,
        align: 'right',
        alignColumns: true,
        verticalAlign: 'top',
        layout: 'vertical',
        backgroundColor: '#000',
    },
};
function Chart(props) {
    const handleMouseOver = (e) => {
        let listItem = document.getElementsByClassName('list-item');
        for (var i = 0; i < listItem.length; i++) {
            listItem[i].classList.contains('active') &&
                listItem[i].classList.remove('active');
        }
        e.currentTarget.classList.add('active');
    };
    return (
        <section id="chart">
            <div className="container">
                <div className="row no-padding">
                    <div className="col-md-8 wr-realtime-chart">
                        <div className="chart-header">
                            <div className="left">
                                <a href="/chart">#zingchart</a>
                                <span className="now-time">
                                    24/05/2020 13:45
                                </span>
                            </div>

                            <button>
                                <i className="fas fa-play"></i> Nghe tất cả
                            </button>
                        </div>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                    <div className="col-md-4 realtime-list-song">
                        <ul>
                            {listSong.map((song, index) => (
                                <li
                                    className={clsx(
                                        'list-item',
                                        index === 0 && 'active'
                                    )}
                                    onMouseOver={handleMouseOver}
                                    key={song.id}
                                >
                                    <div className="sort-number">
                                        <span>0{index + 1}</span>
                                    </div>
                                    <div className="thumb">
                                        <img src={song.thumb} alt="thumb" />
                                    </div>
                                    <div className="info">
                                        <span className="song-name">
                                            {song.name}
                                        </span>
                                        <div className="artist">
                                            <a href="/abc">{song.artist}</a>
                                        </div>
                                    </div>
                                    <div className="percent">
                                        <span>53%</span>
                                    </div>
                                </li>
                            ))}

                            <a href="/chart">Xem tất cả</a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chart;
