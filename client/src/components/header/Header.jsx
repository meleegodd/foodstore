import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'
import './header.css'

const navLink = [
    {
        display: 'Home',
        path: '/home',
    },
    {
        display: 'Foods',
        path: '/foods',
    },
    {
        display: 'Cart',
        path: '/cart',
    },
    {
        display: 'Contact',
        path: '/contact',
    },
]

export default function Header() {
    const menuRef = useRef(null)
    const headerRef = useRef(null)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const dispatch = useDispatch()

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add('header__shrine')
            } else {
                headerRef.current.classList.remove('header__shrine')
            }
        })
        return () => window.removeEventListener('scroll')
    }, [])

    return (
        <div className='header' ref={headerRef}>
            <Container>
                <div className='headerWrapper d-flex align-items-center justify-content-between'>
                    {/* logo */}
                    <Link to='' className='logo'>
                        <img src={logo} alt='logo' />
                        <h5>Food Store</h5>
                    </Link>

                    {/* menu */}
                    <div
                        className='header__navigation'
                        ref={menuRef}
                        onClick={toggleMenu}
                    >
                        <div className='header__menu d-flex align-items-center gap-5'>
                            {navLink.map((item, index) => {
                                return (
                                    <NavLink
                                        to={item.path}
                                        key={index}
                                        className={(navData) => {
                                            return navData.isActive
                                                ? 'active__menu'
                                                : ''
                                        }}
                                    >
                                        {item.display}
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                    {/* Right icon */}
                    <div className='header__right d-flex align-items-center gap-4'>
                        <div onClick={toggleCart} className='header__cart'>
                            <i className='ri-shopping-cart-line'></i>
                            <span className='header__cart-badge'>
                                {totalQuantity}
                            </span>
                        </div>
                        <div className='header__user'>
                            <Link to='/login'>
                                <i className='ri-user-line'></i>
                            </Link>
                        </div>
                        <div
                            onClick={toggleMenu}
                            className='header__mobile-menu'
                        >
                            <i className='ri-menu-line'></i>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
