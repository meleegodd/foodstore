import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './category.css'

import category1 from '../../assets/images/category-01.png'
import category2 from '../../assets/images/category-02.png'
import category3 from '../../assets/images/category-03.png'
import category4 from '../../assets/images/category-04.png'

const categoryData = [
    {
        display: 'Fastfood',
        imgUrl: category1,
    },
    {
        display: 'Pizza',
        imgUrl: category2,
    },
    {
        display: 'Asian Food',
        imgUrl: category3,
    },
    {
        display: 'Row Meat',
        imgUrl: category4,
    },
]

export default function Category() {
    return (
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col
                        className='mb-4'
                        lg='3'
                        md='4'
                        sm='6'
                        xs='6'
                        key={index}
                    >
                        <div className='category__item d-flex align-items-center gap-3'>
                            <img
                                className='category__img'
                                src={item.imgUrl}
                                alt='category'
                            />
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
