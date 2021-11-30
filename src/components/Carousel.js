import React from 'react'
import Pic1 from '../images/SilderPic1.jpg'
import Pic2 from '../images/SliderPic2.jpg'
import Pic3 from '../images/SliderPic3.jpg'
const Carousel = () => {
    return (
        <div >
            <div id="demoCarousel" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
            <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demoCarousel" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Pic1} alt="Los Angeles" className=" img-fluid"/>
                <div className="carousel-caption">
                <h3>Artificial intelligence</h3>
                <p>ُSome Text Most Be Here</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Pic2} alt="Chicago" className=" img-fluid"/>
                <div className="carousel-caption">
                <h3>Robotics</h3>
                <p>ُSome Text Most Be Here</p>
                </div> 
            </div>
            <div className="carousel-item">
                <img src={Pic3} alt="New York" className=" img-fluid"/>
                <div className="carousel-caption">
                <h3>Virtual Reality</h3>
                <p>ُSome Text Most Be Here</p>
                </div>  
            </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#demoCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demoCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            </button>
            </div>
        </div>
    )
}

export default Carousel
