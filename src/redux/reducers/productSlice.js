import { maxLimit, minLimit } from "@/components/data";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    wishlist: [],
    cart: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const currentProd = state.wishlist.find((item) => item.id === action.payload.id)
            if (currentProd) {
                state.wishlist = state.wishlist.filter((item) => item.id !== currentProd.id);
            } else {
                state.wishlist.unshift(action.payload)
            }
        },
        addToCart: (state, action) => {
            state.cart.unshift({ ...action.payload, quantity: 1 })
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
            const q = state.cart.find((item) => item.id === action.payload)
            if (q.quantity < maxLimit) {
                q.quantity++
            }
        },
        decreaseQuantity: (state, action) => {
            const q = state.cart.find((item) => item.id === action.payload)
            if (q.quantity > minLimit) {
                q.quantity--
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.payload)
            }
        },
    }
})

export const { addToWishlist, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = productSlice.actions;

export default productSlice.reducer;