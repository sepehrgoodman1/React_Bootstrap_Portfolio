import React from 'react'
import Pic1 from '../images/pic1.jpg'
import Pic2 from '../images/pic2.jpg'
import Pic3 from '../images/pic3.jpg'
import Pic4 from '../images/pic4.jpg'

const Portfolio = () => {
    return (
        <div className='container'>
            <div className='h2 text-center mt-5' id="Portfolio">Portfolio</div>
            <div className='row container m-auto'>
                <div className='col-12 col-md-3 col-sm-6 g-3'>
                    <img src={Pic1} className='img-fluid img-port' data-bs-toggle="modal" data-bs-target="#Modal1" />
                </div>
                <div className='col-12 col-md-3 col-sm-6 g-3'>
                    <img src={Pic2} className='img-fluid img-port' data-bs-toggle="modal" data-bs-target="#Modal2"/>
                </div>
                <div className='col-12 col-md-3 col-sm-6 g-3'>
                    <img src={Pic3} className='img-fluid img-port' data-bs-toggle="modal" data-bs-target="#Modal3"/>
                </div>
                <div className='col-12 col-md-3 col-sm-6 g-3'>
                    <img src={Pic4} className='img-fluid img-port' data-bs-toggle="modal" data-bs-target="#Modal4"/>
                </div>
            </div>





            <div id="Modal1" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg">

                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Design a Movie Website</h5>
                    <button type="button" className="close border-0 h3" data-bs-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body text-center">
                    <img src={Pic1} className='img-fluid'/>
                    <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                </div>
                
                </div>

            </div>
            </div>
            
            <div id="Modal2" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg">

                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Technology</h5>
                    <button type="button" className="close border-0 h3" data-bs-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body text-center">
                    <img src={Pic2} className='img-fluid'/>
                    <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                </div>
                
                </div>

            </div>
            </div>

            <div id="Modal3" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg">

                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Programing</h5>
                    <button type="button" className="close border-0 h3" data-bs-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body text-center">
                    <img src={Pic3} className='img-fluid'/>
                    <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                </div>
                
                </div>

            </div>
            </div>


            <div id="Modal4" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg">

                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Graphic design</h5>
                    <button type="button" className="close border-0 h3" data-bs-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body text-center">
                    <img src={Pic4} className='img-fluid'/>
                    <p className='my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                </div>
                
                </div>

            </div>
            </div>
        </div>
    )
}

export default Portfolio
