import React from 'react'
import './cartItem.css'
import { ListGroupItem } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shopping-cart/cartSlice'

export default function CartItem(props) {
    const { id, image01, price, quantity, title, totalPrice } = props.item

    const dispatch = useDispatch()

    const incrementItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image01,
            })
        )
    }

    const decrementItem = () => {
        dispatch(
            cartActions.removeItem({
                id,
                title,
                price,
                image01,
            })
        )
    }

    const deleteItem = () => {
        dispatch(
            cartActions.deleteItem({
                id,
                title,
                price,
                image01,
            })
        )
    }

    return (
        <ListGroupItem className='border-0 cart__item'>
            <div className='cart__item-info d-flex align-items-center gap-5'>
                <img src={image01} alt='product-img' />
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className='cart__product-info'>
                        <h6 className='cart__product-title'>{title}</h6>
                        <p className='cart__product-price gap-3'>
                            {quantity} x <span>${totalPrice}</span>
                        </p>
                        <div className='cart__product-btn d-flex align-items-center justify-content-between'>
                            <span
                                onClick={incrementItem}
                                className='increase-btn'
                            >
                                <i class='ri-add-line'></i>
                            </span>
                            <span>{quantity}</span>
                            <span
                                onClick={decrementItem}
                                className='decrease-btn'
                            >
                                <i class='ri-subtract-line'></i>
                            </span>
                        </div>
                    </div>

                    <span onClick={deleteItem} className='deleteProduct-btn'>
                        <i class='ri-close-line'></i>
                    </span>
                </div>
            </div>
        </ListGroupItem>
    )
}
