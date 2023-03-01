import { createSlice } from '@reduxjs/toolkit'

const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: { cartIsVisibale: false },
    reducers: {
        toggle(state) {
            state.cartIsVisibale = !state.cartIsVisibale
        },
    },
})

export const cartUiActions = cartUiSlice.actions
export default cartUiSlice
