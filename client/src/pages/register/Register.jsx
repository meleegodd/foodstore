import React, { useRef } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../../components/common-section/CommonSection'
import Helmet from '../../components/helmet/Helmet'

export default function Register() {
    const signupNameRef = useRef()
    const signupPasswordRef = useRef()
    const signupEmailRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <Helmet title='Signup'>
            <CommonSection title='Signup' />
            <section>
                <Container>
                    <Row>
                        <Col
                            lg='6'
                            md='6'
                            sm='12'
                            className='m-auto text-center'
                        >
                            <form
                                className='form mb-5'
                                onSubmit={submitHandler}
                            >
                                <div className='form__group'>
                                    <input
                                        type='text'
                                        placeholder='Full name'
                                        required
                                        ref={signupNameRef}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        required
                                        ref={signupEmailRef}
                                    />
                                </div>
                                <div className='form__group'>
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        required
                                        ref={signupPasswordRef}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='product__addToCart-btn'
                                >
                                    Sign Up
                                </button>
                            </form>
                            <Link to='/login'>
                                Already have an account?{' '}
                                <span className='register__button'>Login</span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
