import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shopping-cart/cartSlice'

export default function ProductCard(props) {
    const { id, title, price, image01 } = props.item
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                image01,
                price,
            })
        )
    }

    return (
        <div className='product__item'>
            <div className='product__img'>
                <img src={image01} alt='productimg' />
            </div>
            <div className='product__content'>
                <h5>
                    <Link to={`/foods/${id}`}>{title}</Link>
                </h5>
                <div className='d-flex justify-content-between'>
                    <span className='product__price'>${price}</span>
                    <button
                        onClick={addToCart}
                        className='product__addToCart-btn'
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
