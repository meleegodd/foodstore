const { createSlice } = require('@reduxjs/toolkit')

const cartItem =
    localStorage.getItem('cartItem') !== null
        ? JSON.parse(localStorage.getItem('cartItem'))
        : []
const totalQuantity =
    localStorage.getItem('totalQuantity') !== null
        ? JSON.parse(localStorage.getItem('totalQuantity'))
        : 0
const totalAmount =
    localStorage.getItem('totalAmount') !== null
        ? JSON.parse(localStorage.getItem('totalAmount'))
        : 0

const initialState = {
    cartItem: cartItem,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        // add item
        addItem(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItem.find(
                (item) => item.id === newItem.id
            )
            state.totalQuantity++
            if (!existingItem) {
                state.cartItem.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(
                    existingItem.price * existingItem.quantity
                )
            }

            state.totalAmount = state.cartItem.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)

            localStorage.setItem(
                'cartItem',
                JSON.stringify(state.cartItem.map((item) => item))
            )
            localStorage.setItem(
                'totalQuantity',
                JSON.stringify(state.totalQuantity)
            )
            localStorage.setItem(
                'totalAmount',
                JSON.stringify(state.totalAmount)
            )
        },

        // remove item
        removeItem(state, action) {
            const currentItem = action.payload
            const index = state.cartItem.findIndex(
                (item) => item.id === currentItem.id
            )
            if (index !== -1) {
                let itemRemove = state.cartItem
                state.totalQuantity--
                if (itemRemove[index].quantity > 1) {
                    itemRemove[index].quantity--
                    itemRemove[index].totalPrice = Number(
                        itemRemove[index].price * itemRemove[index].quantity
                    )
                    state.cartItem = itemRemove
                } else {
                    itemRemove.splice(index, 1)
                    state.cartItem = itemRemove
                }
            }
            state.totalAmount = state.cartItem.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)
        },

        // Delete item
        deleteItem(state, action) {
            const currentItem = action.payload
            const index = state.cartItem.findIndex(
                (item) => item.id === currentItem.id
            )
            state.totalQuantity =
                state.totalQuantity - state.cartItem[index].quantity
            if (index !== -1) {
                state.cartItem.splice(index, 1)
            }
            state.totalAmount = state.cartItem.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0)
        },
    },
})

export const cartActions = cartSlice.actions
export default cartSlice
