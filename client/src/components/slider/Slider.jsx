import React from 'react'
import './slider.css'
import Slider from 'react-slick'

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

export default function TestimonialSlider() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        swipeToSlice: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Slider {...settings}>
            <div className='slider__review'>
                <p className='slider__text'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Necessitatibus, iure.
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava01} alt='avatar' />
                    <h6>Nguyễn Văn A</h6>
                </div>
            </div>
            <div className='slider__review'>
                <p className='slider__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere, quidem?
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava02} alt='avatar' />
                    <h6>Nguyễn Văn B</h6>
                </div>
            </div>
            <div className='slider__review'>
                <p className='slider__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, recusandae?
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava03} alt='avatar' />
                    <h6>Nguyễn Văn C</h6>
                </div>
            </div>
        </Slider>
    )
}
