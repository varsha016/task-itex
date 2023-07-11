import { createSlice } from '@reduxjs/toolkit'
import getAllProductAction, { deleteSingleProductAction, getSingleProductAction, updateProductAction } from '../action/productAction'


const productSlice = createSlice({
    name: "products",
    initialState: { products: [], singleProducts: {} },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllProductAction.pending, (state, { payload }) => {
                state.loading = false
            })
            .addCase(getAllProductAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload

            })
            .addCase(getAllProductAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(getSingleProductAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getSingleProductAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.singleProducts = payload
            })
            .addCase(getSingleProductAction.rejected, (state, { payload }) => {
                state.loading = false
                state.getProductsError = payload
            })

            .addCase(deleteSingleProductAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteSingleProductAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.deleteProducts = true
            })
            .addCase(deleteSingleProductAction.rejected, (state, { payload }) => {
                state.loading = false
                state.deleteProductsError = payload
            })

            .addCase(updateProductAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateProductAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.updateProducts = payload
            })
            .addCase(updateProductAction.rejected, (state, { payload }) => {
                state.loading = false
                state.updateProductsError = payload
            })






    }
})
export default productSlice.reducer