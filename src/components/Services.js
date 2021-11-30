import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTv} from '@fortawesome/free-solid-svg-icons';
import {faFileCode} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF  } from '@fortawesome/free-brands-svg-icons';
import {faGoogle  } from '@fortawesome/free-brands-svg-icons';




const Services = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-dark' id='Services'>My Services</h1>
            <div className='row '>
                    <div className='card bg-transparent col-sm-6 col-md-3 text-center g-3 px-3 border-0'>
                        <div className='container card-body services-card '>
                            <div className=' rounded-circle d-flex align-items-center justify-content-center mx-auto my-3'>
                                <FontAwesomeIcon icon={faTv} className='icon-card  my-3 mt-4 h2'/>
                            </div>
                            <h3 className='card-title'>
                                Web Design
                            </h3>
                            <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='card bg-transparent col-sm-6 col-md-3 text-center g-3 px-3 border-0'>
                        <div className='container card-body services-card '>
                            <div className=' rounded-circle d-flex align-items-center justify-content-center mx-auto my-3'>
                                <FontAwesomeIcon icon={faFileCode} className='icon-card  my-3 mt-4 h2'/>
                            </div>
                            <h3 className='card-title'>
                                Web Development
                            </h3>
                            <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='card bg-transparent col-sm-6 col-md-3 text-center g-3 px-3 border-0'>
                        <div className='container card-body services-card '>
                            <div className=' rounded-circle d-flex align-items-center justify-content-center mx-auto my-3'>
                                <FontAwesomeIcon icon={faFacebookF} className='icon-card  my-3 mt-4 h2'/>
                            </div>
                            <h3 className='card-title'>
                                FaceBook Ads SMM
                            </h3>
                            <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='card bg-transparent col-sm-6 col-md-3 text-center g-3 px-3 border-0'>
                        <div className='container card-body services-card '>
                            <div className=' rounded-circle d-flex align-items-center justify-content-center mx-auto my-3'>
                                <FontAwesomeIcon icon={faGoogle} className='icon-card  my-3 mt-4 h2'/>
                            </div>
                            <h3 className='card-title'>
                                Google Ads
                            </h3>
                            <p className='card-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Services
