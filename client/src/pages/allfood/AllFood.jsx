import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../../components/common-section/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import './allFood.css'
import './panigation.css'

import products from '../../assets/fake-data/products'
import ProductCard from '../../components/product-card/ProductCard'
import ReactPaginate from 'react-paginate'

export default function AllFood() {
    const [searchTerm, setSearchTerm] = useState('')
    const [pageNumber, setPageNumber] = useState(0)

    const searchedProduct = products.filter((item) => {
        if (searchTerm === '') return item
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
        }
        return false
    })

    const productPerPage = 12
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    )

    const pageCount = Math.ceil(searchedProduct.length / productPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <Helmet title='All Foods'>
            <CommonSection title='All Foods' />

            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className='search__widget'>
                                <input
                                    type='text'
                                    placeholder="I'm looking for..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                <span>
                                    <i className='ri-search-line'></i>
                                </span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6' className='mb-5'>
                            <div className='sorting__widget text-end'>
                                <select>
                                    <option>Default</option>
                                    <option value='ascending'>A-Z</option>
                                    <option value='descending'>Z-A</option>
                                    <option value='high-price'>
                                        high to low
                                    </option>
                                    <option value='low-price'>
                                        low to high
                                    </option>
                                </select>
                            </div>
                        </Col>
                        {displayPage.map((item, index) => (
                            <Col lg='3' md='4' sm='6' key={index}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel='prev'
                                nextLabel='next'
                                containerClassName='paginationBtns'
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
