import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import './footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <Link to='/' className='footer__logo text-start'>
                            <img src={logo} alt='logo' />
                            <h5>Food Store</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt pariatur accusamus
                            </p>
                        </Link>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4 className='footer__title'>Delivery Time</h4>
                        <ListGroup className='delivery-time__list'>
                            <ListGroupItem className='delivery-time__item border-0 ps-0'>
                                <span>Monday - Friday</span>
                                <p>8:00am - 20:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className='delivery-time__item border-0 ps-0'>
                                <span>Saturday - Sunday</span>
                                <p>OFF</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4 className='footer__title'>Contact</h4>
                        <ListGroup className='delivery-time__list'>
                            <ListGroupItem className='delivery-time__item border-0 ps-0'>
                                <span>Location</span>
                                <p>HCM</p>
                            </ListGroupItem>
                            <ListGroupItem className='delivery-time__item border-0 ps-0'>
                                <span>Phone: </span>
                                <p>0386689085</p>
                            </ListGroupItem>
                            <ListGroupItem className='delivery-time__item border-0 ps-0'>
                                <span>Email:</span>
                                <p>email@gmail.com</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4 className='footer__title'>Newsletter</h4>
                        <p className='footer__title-newsletter'>
                            Subsribe our newsletter
                        </p>
                        <div className='footer__newsletter'>
                            <input
                                type='email'
                                placeholder='Enter your email'
                            />
                            <span>
                                <i className='ri-send-plane-line'></i>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg='6' md='6'>
                        <p className='footer__copyright'>
                            Copyright - 2022, website make by ReactJs. All
                            Rights Reserved.
                        </p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='footer__social-link'>
                            <span>
                                <Link to='/'>
                                    <i className='ri-facebook-line'></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='/'>
                                    <i className='ri-github-line'></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='/'>
                                    <i className='ri-youtube-line'></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='/'>
                                    <i className='ri-linkedin-line'></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
