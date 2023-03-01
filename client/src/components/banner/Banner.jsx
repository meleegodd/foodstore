import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './banner.css'
import heroImg from '../../assets/images/hero.png'

export default function Banner() {
    return (
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="banner__content">
                        <h5 className="mb-3">Easy way to make an order</h5>
                        <h1 className="banner__title">
                            <span style={{ color: 'var(--red-color)' }}>
                                Hungry?
                            </span>
                            <span>
                                Just wait <br /> food at{' '}
                            </span>
                            <span style={{ color: 'var(--red-color)' }}>
                                your door
                            </span>
                        </h1>
                        <div className="banner__btns d-flex align-items-center gap-5 mt-4">
                            <button className="banner__btns--order d-flex justify-content-between align-items-center">
                                Order now
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                            <button className="banner__btns--all-foods">
                                <Link to="/foods">See all foods</Link>
                            </button>
                        </div>
                        <div className="banner__service d-flex align-items-center gap-5 mt-5">
                            <div className="d-flex align-items-center gap-2">
                                <span className="banner__service--icon">
                                    <i className="ri-car-line"></i>
                                </span>
                                No shiping charge
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="banner__service--icon">
                                    <i className="ri-shield-check-line"></i>
                                </span>
                                100% secure checkout
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <div className="banner__img">
                        <img src={heroImg} alt="banner-img" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
