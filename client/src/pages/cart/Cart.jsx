import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../../components/common-section/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import { cartActions } from '../../store/shopping-cart/cartSlice'
import './cart.css'

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItem)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const dispatch = useDispatch()

    const deleteItem = (item) => {
        const { id, title, image01, price } = item
        dispatch(cartActions.deleteItem({ id, title, image01, price }))
    }

    return (
        <Helmet title='Cart'>
            <CommonSection title='Your Cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            {cartItems.length === 0 ? (
                                <h5 className='text-center'>
                                    Your cart is empty
                                </h5>
                            ) : (
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>
                                                Image
                                            </th>
                                            <th className='text-center'>
                                                Title
                                            </th>
                                            <th className='text-center'>
                                                Price
                                            </th>
                                            <th className='text-center'>
                                                Quantity
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className='text-center'>
                                                    <img
                                                        className='cart-img'
                                                        src={item.image01}
                                                        alt=''
                                                    />
                                                </td>
                                                <td className='text-center'>
                                                    {item.title}
                                                </td>
                                                <td className='text-center'>
                                                    ${item.price}
                                                </td>
                                                <td className='text-center'>
                                                    {item.quantity}
                                                </td>
                                                <td className='cart__delete-btn text-center'>
                                                    <i
                                                        onClick={() =>
                                                            deleteItem(item)
                                                        }
                                                        className='ri-delete-bin-line'
                                                    ></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}

                            <div className='mt-5'>
                                <h6>
                                    Total:
                                    <span className='cart__total m-2'>
                                        ${totalAmount}
                                    </span>
                                </h6>
                                <p>
                                    Taxes and shipping will calcucate at
                                    checkout
                                </p>
                                <div className='cart__page-btn'>
                                    <button className='product__addToCart-btn me-3'>
                                        <Link to='/foods'>
                                            Continue Shopping
                                        </Link>
                                    </button>
                                    <button className='product__addToCart-btn'>
                                        <Link to='/checkout'>
                                            Proceed to checkout
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
