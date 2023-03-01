import React, { useState, useEffect } from 'react'
import './foodDetail.css'
import products from '../../assets/fake-data/products'
import CommonSection from '../../components/common-section/CommonSection'
import Helmet from '../../components/helmet/Helmet'

import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shopping-cart/cartSlice'

export default function FoodDetail() {
    const { id } = useParams()
    const [tab, setTab] = useState('desc')
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const product = products.find((product) => product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image01)
    const { title, price, category, desc, image01 } = product

    const relatedProduct = products.filter(
        (item) => product.category === item.category
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, comment)
    }

    const addItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                category,
                desc,
                image01,
            })
        )
    }

    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title='Product-detail'>
            <CommonSection title={product.title} />
            <section>
                <Container>
                    <Row>
                        <Col lg='2' md='2'>
                            <div className='product__image'>
                                <div
                                    onClick={() =>
                                        setPreviewImg(product.image01)
                                    }
                                    className='img__item'
                                >
                                    <img
                                        className='w-50'
                                        src={product.image01}
                                        alt='#'
                                    />
                                </div>
                                <div
                                    onClick={() =>
                                        setPreviewImg(product.image02)
                                    }
                                    className='img__item'
                                >
                                    <img
                                        className='w-50'
                                        src={product.image02}
                                        alt='#'
                                    />
                                </div>
                                <div
                                    onClick={() =>
                                        setPreviewImg(product.image03)
                                    }
                                    className='img__item'
                                >
                                    <img
                                        className='w-50'
                                        src={product.image03}
                                        alt='#'
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg='4' md='4'>
                            <div className='product__main-img'>
                                <img
                                    className='w-100'
                                    src={previewImg}
                                    alt='#'
                                />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className='product__content'>
                                <h2 className='product__title'>
                                    {product.title}
                                </h2>
                                <p className='product__price'>
                                    Price: <span>${product.price}</span>
                                </p>
                                <p className='product__category'>
                                    Category: <span>{product.category}</span>
                                </p>
                                <button
                                    onClick={addItem}
                                    className='product__addToCart-btn'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </Col>
                        <Col lg='12' className='mt-5'>
                            <div className='tabs py-2'>
                                <h6
                                    onClick={() => setTab('desc')}
                                    className={
                                        `${tab}` === 'desc' ? 'tab__active' : ''
                                    }
                                >
                                    Description
                                </h6>
                                <h6
                                    onClick={() => setTab('rev')}
                                    className={
                                        `${tab}` === 'rev' ? 'tab__active' : ''
                                    }
                                >
                                    Review
                                </h6>
                            </div>
                            <div className='tab__content'>
                                {tab === 'desc' ? (
                                    <p>{product.desc}</p>
                                ) : (
                                    <div className='tab__form mb-3'>
                                        <div className='review pt-5'>
                                            <p className='user__name mb-0'>
                                                Tho Nguyen
                                            </p>
                                            <p className='user__email'>
                                                email@gmail.com
                                            </p>
                                            <p className='feedback__text'>
                                                great product
                                            </p>
                                        </div>

                                        <div className='review'>
                                            <p className='user__name mb-0'>
                                                Tho Nguyen
                                            </p>
                                            <p className='user__email'>
                                                email@gmail.com
                                            </p>
                                            <p className='feedback__text'>
                                                great product
                                            </p>
                                        </div>

                                        <div className='review'>
                                            <p className='user__name mb-0'>
                                                Tho Nguyen
                                            </p>
                                            <p className='user__email'>
                                                email@gmail.com
                                            </p>
                                            <p className='feedback__text'>
                                                great product
                                            </p>
                                        </div>
                                        <form
                                            onSubmit={handleSubmit}
                                            className='form'
                                        >
                                            <div className='form__group'>
                                                <input
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    type='text'
                                                    placeholder='Enter your name'
                                                    required
                                                />
                                            </div>

                                            <div className='form__group'>
                                                <input
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    type='text'
                                                    placeholder='Enter your email'
                                                    required
                                                />
                                            </div>

                                            <div className='form__group'>
                                                <textarea
                                                    onChange={(e) =>
                                                        setComment(
                                                            e.target.value
                                                        )
                                                    }
                                                    rows={5}
                                                    type='text'
                                                    placeholder='Write your review'
                                                    required
                                                />
                                            </div>

                                            <button
                                                type='submit'
                                                className='product__addToCart-btn'
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </Col>

                        <Col lg='12' className='mb-5 mt-4'>
                            <h2 className='related__product-title'>
                                You might also like
                            </h2>
                        </Col>

                        {relatedProduct.map((item) => (
                            <Col
                                lg='3'
                                md='4'
                                sm='6'
                                xs='6'
                                className='mb-4'
                                key={item.id}
                            >
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
