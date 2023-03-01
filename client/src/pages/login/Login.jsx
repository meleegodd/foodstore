import React, { useRef } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../../components/common-section/CommonSection'
import Helmet from '../../components/helmet/Helmet'

export default function Login() {
    const nameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Helmet title='Login'>
            <CommonSection title='Login' />
            <section>
                <Container>
                    <Row>
                        <Col
                            lg='6'
                            md='6'
                            sm='12'
                            className='m-auto text-center'
                        >
                            <form onClick={handleSubmit} className='form mb-5'>
                                <div className='form__group'>
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        required
                                        ref={nameRef}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        required
                                        ref={passwordRef}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='product__addToCart-btn'
                                >
                                    Login
                                </button>
                            </form>
                            <Link to='/register'>
                                Don't have an account?
                                <span className='login__button'>
                                    Create an account
                                </span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
