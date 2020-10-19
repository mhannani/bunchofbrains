// utils
// =====
import React from 'react';

// Slideshow images
// ================
import slide_image_1 from './slideShowImages/1.jpg'
import slide_image_2 from './slideShowImages/2.jpg'
import slide_image_3 from './slideShowImages/3.jpg'
import slide_image_4 from './slideShowImages/4.jpg'
import slide_image_5 from './slideShowImages/5.jpg'
import slide_image_6 from './slideShowImages/6.jpg'

class SlideShow extends React.Component{
    render(){
        return(
            <div className={'container'}>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="false">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 slide_image" id={'carouselExampleIndicators_1'}
                                 src={slide_image_1} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>caption title</h5>
                                <p>caption message</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide_image" src={slide_image_2} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>caption title</h5>
                                <p>caption message</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide_image" src={slide_image_3} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>...</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide_image" src={slide_image_4} alt="forth slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>caption title</h5>
                                <p>caption message</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide_image" src={slide_image_5} alt="fifth slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>caption title</h5>
                                <p>caption message</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={slide_image_6} alt="sixth slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>caption title</h5>
                                <p>caption message</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default SlideShow