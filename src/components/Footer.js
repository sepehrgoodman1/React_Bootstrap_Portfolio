import React from 'react'
import Carousel from './Carousel'

const Footer = () => {
    return (
        <div id='Footer' className='d-flex  justify-content-center align-items-center mt-5'>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h3 className='text-center d-block mb-4 text-white fw-bold'>Our Technologies</h3>
                    <Carousel/>
                </div>
            </div>

        </div>
    )
}

export default Footer
