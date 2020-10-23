// utils
// =====
import React from 'react';
import CaptionMessage from "../chunks/CaptionMessage";
import CaptionTitle from "../chunks/CaptionTitle";
// Slideshow images
// ================
import slide_image_1 from './slideShowImages/1.jpg'
import slide_image_2 from './slideShowImages/2.jpg'

class SlideShow extends React.Component{
    render(){
        return(
            <div className={'container-xl mx-auto mt-5 slideshow'}>
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade data-interval='1' col-xl-12 col-lg-10 col-md-12 col-sm-12 mx-auto " data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 slide_image" id={'carouselExampleIndicators_1'}
                                 src={slide_image_1} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <CaptionTitle className={'text-dark'}>caption title</CaptionTitle>
                                <CaptionMessage className={'text-dark'}>caption message</CaptionMessage>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 slide_image" src={slide_image_2} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <CaptionTitle className={'text-dark'}>caption title</CaptionTitle>
                                <CaptionMessage className={'text-dark'}>caption message</CaptionMessage>
                            </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        {/*<span className="carousel-control-prev-icon" aria-hidden="true"/>*/}
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="ml-sm-1 bi bi-arrow-left"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4
                                4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        {/*<span className="carousel-control-next-icon" aria-hidden="true"/>*/}
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4
                              4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default SlideShow