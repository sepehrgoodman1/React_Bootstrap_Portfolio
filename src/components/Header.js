import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
        
        <div className='header-wrapper d-flex justify-content-center align-items-center text-center text-white'>
            <div className='main-info'>
                <h1 className='text-uppercase mb-4'>Web development and website promotions</h1>
                <Typed
                 className='h3 text-light '
                 strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop/>
            <a href='/' className='btn btn-primary d-block mx-auto my-5'>Contact me</a>
            </div>
        </div>
    )
}

export default Header
