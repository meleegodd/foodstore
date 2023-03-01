import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'
import CartItem from '../cartitem/CartItem'
import './cartMini.css'

export default function CartMini() {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.cart.cartItem)
    const totalAmount = useSelector((state) => state.cart.totalAmount)

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    return (
        <div className='cart-mini__container'>
            <ListGroup className='cart-mini'>
                <div className='cart-mini__close'>
                    <span onClick={toggleCart}>
                        <i className='ri-close-fill'></i>
                    </span>
                </div>
                <div className='cart-mini__item-list'>
                    {cartProducts.length === 0 ? (
                        <h6 className='text-center mt-5'>
                            No item added to cart
                        </h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )}
                </div>
                <div className='cart-mini__bottom'>
                    <h6>
                        Total: <span>${totalAmount}</span>
                    </h6>
                    <button>
                        <Link to='/checkout'>Checkout</Link>
                    </button>
                </div>
            </ListGroup>
        </div>
    )
}
