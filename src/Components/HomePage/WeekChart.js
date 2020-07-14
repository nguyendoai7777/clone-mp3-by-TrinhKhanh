import React from 'react';
import vn from "./../../Assets/images/song-vn-2x.jpg";
import mv from "./../../Assets/images/mv-vn-2x.jpg";
import usuk from "./../../Assets/images/web_song_usuk.png";
import kpop from "./../../Assets/images/web_song_kpop.png";
function WeekChart(props) {
    return (
        <section id="week-chart">
            <div className="container">
                <div className="row no-padding">
                    <div className="col-md-3">
                        <a href="/chart">
                            <img src={vn} alt="wweekchart"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="/chart">
                            <img src={mv} alt="wweekchart"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="/chart">
                            <img src={usuk} alt="wweekchart"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="/chart">
                            <img src={kpop} alt="wweekchart"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeekChart;