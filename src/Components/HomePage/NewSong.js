import React from 'react';
import { Link } from 'react-router-dom';

function NewSong(props) {
    return (
        <section id="new-song">
            <div className="container">
                <div className="row no-padding">
                    <div className="col-md-4">
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/2/1/210c9bd4a8ccbff815f86290b8c1a5f9_1345368824.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(1)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">I want it that way</span>
                                <span className="artist">Backstreet boys</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/2/1/210c9bd4a8ccbff815f86290b8c1a5f9_1345368824.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(1)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">I want it that way</span>
                                <span className="artist">Backstreet boys</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/2/1/210c9bd4a8ccbff815f86290b8c1a5f9_1345368824.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(1)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">I want it that way</span>
                                <span className="artist">Backstreet boys</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/2/1/210c9bd4a8ccbff815f86290b8c1a5f9_1345368824.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(1)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">I want it that way</span>
                                <span className="artist">Backstreet boys</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/2/1/210c9bd4a8ccbff815f86290b8c1a5f9_1345368824.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(1)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">I want it that way</span>
                                <span className="artist">Backstreet boys</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                        <Link to="/song/song-detail.html" className="list-song">
                            <div className="thumb">
                                <img
                                    src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/2/d/fd2d699d38d432efe778b18564fec67d.jpg"
                                    alt=""
                                />
                                <div className="overlay" onClick={(e)=> { e.preventDefault(); props.addSongToQueue(2)}}>
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="info">
                                <span className="song-name">Left or right</span>
                                <span className="artist">RTK</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewSong;
