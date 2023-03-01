import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import CartMini from './components/cartMini/CartMini'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AllFood from './pages/allfood/AllFood'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import Contact from './pages/contact/Contact'
import FoodDetail from './pages/fooddetail/FoodDetail'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
    const showCart = useSelector((state) => state.cartUi.cartIsVisibale)

    return (
        <div>
            <Header />
            {showCart && <CartMini />}
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/foods' element={<AllFood />} />
                <Route path='/foods/:id' element={<FoodDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/Checkout' element={<Checkout />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
