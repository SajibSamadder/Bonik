import React from 'react'
import BannerDetails from './BannerDetails/BannerDetails'
import BannerManu from './BannerManu/BannerManu'
import "./Banner.css"
import { useContext } from 'react'
import { IncreseContext } from '../../../App'

function Banner() {

    return (
        <section className='banner'>
            <div className='container'>
                <div className="banner_wrapper">
                    <BannerManu></BannerManu>
                    <BannerDetails></BannerDetails>

                </div>
            </div>
        </section>
    )
}

export default Banner