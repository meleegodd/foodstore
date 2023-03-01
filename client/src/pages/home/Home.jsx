import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import Helmet from '../../components/helmet/Helmet'
import ProductCard from '../../components/product-card/ProductCard'
import './home.css'

import featureImg1 from '../../assets/images/service-01.png'
import featureImg2 from '../../assets/images/service-02.png'
import featureImg3 from '../../assets/images/service-03.png'

import products from '../../assets/fake-data/products'

import foodCategoryImg1 from '../../assets/images/hamburger.png'
import foodCategoryImg2 from '../../assets/images/pizza.png'
import foodCategoryImg3 from '../../assets/images/bread.png'

import whyImg from '../../assets/images/location.png'

import nextWorkImg from '../../assets/images/network.png'
import Slider from '../../components/slider/Slider'

const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg1,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.',
    },
    {
        title: 'Super Dine In',
        imgUrl: featureImg2,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.',
    },
    {
        title: 'Easy Pick Up',
        imgUrl: featureImg3,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.',
    },
]

export default function Home() {
    const [category, setCategory] = useState('ALL')
    const [allProducts, setAllProducts] = useState(products)
    const [hotPizza, setHotPizza] = useState([])

    useEffect(() => {
        const filterdPizza = products.filter(
            (item) => item.category === 'Pizza'
        )
        const slicePizza = filterdPizza.slice(0, 4)
        setHotPizza(slicePizza)
    }, [])

    useEffect(() => {
        if (category === 'ALL') {
            setAllProducts(products)
        }
        if (category === 'BURGER') {
            const filteredProducts = products.filter(
                (item) => item.category === 'Burger'
            )
            setAllProducts(filteredProducts)
        }
        if (category === 'PIZZA') {
            const filteredProducts = products.filter(
                (item) => item.category === 'Pizza'
            )
            setAllProducts(filteredProducts)
        }
        if (category === 'BREAD') {
            const filteredProducts = products.filter(
                (item) => item.category === 'Bread'
            )
            setAllProducts(filteredProducts)
        }
    }, [category])

    return (
        <Helmet title='Home'>
            <section>
                <Banner />
            </section>
            <section className='pt-0'>
                <Category />
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h5 className='feature__subtitle'>What we serve</h5>
                            <h2 className='feature__title'>
                                Just sit back at home
                            </h2>
                            <h2 className='feature__title'>
                                We will <span>take care</span>
                            </h2>
                        </Col>
                        {featureData.map((item, index) => (
                            <Col
                                className='mt-5 '
                                lg='4'
                                md='6'
                                sm='6'
                                key={index}
                            >
                                <div className='feature__item px-5 py-3'>
                                    <img src={item.imgUrl} alt='feature item' />
                                    <h5 className='feature__item-title'>
                                        {item.title}
                                    </h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2>Popular Foods</h2>
                        </Col>
                        <Col lg='12'>
                            <div className='home__category-food d-flex justify-content-center align-items-center gap-5'>
                                <button
                                    onClick={() => setCategory('ALL')}
                                    className={`home__all-btn ${
                                        category === 'ALL'
                                            ? 'home__category--active'
                                            : ''
                                    }`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setCategory('BURGER')}
                                    className={`d-flex align-items-center justify-content-center gap-2 ${
                                        category === 'BURGER'
                                            ? 'home__category--active'
                                            : ''
                                    }`}
                                >
                                    <img src={foodCategoryImg1} alt='Burger' />
                                    Burger
                                </button>
                                <button
                                    onClick={() => setCategory('PIZZA')}
                                    className={`d-flex align-items-center justify-content-center gap-2 ${
                                        category === 'PIZZA'
                                            ? 'home__category--active'
                                            : ''
                                    }`}
                                >
                                    <img src={foodCategoryImg2} alt='Pizza' />
                                    Pizza
                                </button>
                                <button
                                    onClick={() => setCategory('BREAD')}
                                    className={`d-flex align-items-center justify-content-center gap-2 ${
                                        category === 'BREAD'
                                            ? 'home__category--active'
                                            : ''
                                    }`}
                                >
                                    <img src={foodCategoryImg3} alt='Bread' />
                                    Bread
                                </button>
                            </div>
                        </Col>
                        {allProducts.map((item) => (
                            <Col
                                lg='3'
                                md='4'
                                sm='6'
                                xs='6'
                                key={item.id}
                                className='mt-5'
                            >
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <img
                                className='w-100'
                                src={whyImg}
                                alt='why tasty treat'
                            />
                        </Col>
                        <Col lg='6' md='6'>
                            <div className='home__description'>
                                <h2 className='home__description-title mb-4'>
                                    Why <span> Tasty Treat?</span>
                                </h2>
                                <p className='home__description-desc'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consectetur animi iusto
                                    vel culpa velit unde, quia nobis repudiandae
                                    cumque esse architecto ipsa sunt fugiat eos
                                    reprehenderit modi aperiam quis commodi!
                                </p>
                                <ListGroup className='mt-4'>
                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='home__choose-us--title d-flex align-items-center gap-2'>
                                            <i className='ri-checkbox-circle-line'></i>
                                            Fresh and tasty foods
                                        </p>
                                        <p className='home__choose-us--desc'>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Est,
                                            natus?
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='home__choose-us--title d-flex align-items-center gap-2'>
                                            <i className='ri-checkbox-circle-line'></i>
                                            Quality support
                                        </p>
                                        <p className='home__choose-us--desc'>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Debitis, dignissimos.
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='home__choose-us--title d-flex align-items-center gap-2'>
                                            <i className='ri-checkbox-circle-line'></i>
                                            Order from any
                                        </p>
                                        <p className='home__choose-us--desc'>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Debitis, dignissimos.
                                        </p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2>Hot Pizza</h2>
                        </Col>
                        {hotPizza.map((item) => (
                            <Col lg='3' md='4' key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className='home__testimonial mb-4'>
                                <h5 className='home__testimonial-subtitle'>
                                    Testimonial
                                </h5>
                                <h2 className='home__testimonial-title mb-4'>
                                    What our <span>customers</span> are saying
                                </h2>
                                <p className='home__testimonial-desc'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. In sed quos, totam culpa
                                    laudantium facere deleniti magnam. Dolore,
                                    hic amet.
                                </p>
                                <Slider />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <img className='w-100' src={nextWorkImg} alt='' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
