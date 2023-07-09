import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
    name: 'common',
    initialState: {
        loading: false,
        error: null,
        products: null
    },
    reducers: {
        getProductsSuccess(state, action) {
            return {
                ...state,
                products: action.payload
            }
        },
        getProductsFailure(state, action) {
            return {
                ...state,
                error: action.payload
            }
        }
    },
})

export const { getProductsSuccess, getProductsFailure } = commonSlice.actions

export default commonSlice.reducer