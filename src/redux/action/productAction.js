
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'



const getAllProductAction = createAsyncThunk("products/get", async () => {
    try {
     
        const { data:{products }} = await axios.get("https://dummyjson.com/products" )
        return products

    } catch (error) {
        return error.message
    }
})
export const getSingleProductAction = createAsyncThunk("singleProducts/get", async (id, { getState, rejectWithValue }) => {
    try {
        const {data}= await axios.get(`https://dummyjson.com/products/${id}`)
        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteSingleProductAction = createAsyncThunk("single/delete", async (id, { getState, rejectWithValue }) => {
    try {
        const { data:{products} } = await axios.delete(`https://dummyjson.com/products/${id}`)
        return

    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const updateProductAction = createAsyncThunk("product/update", async (edit, { getState, rejectWithValue }) => {
    try {

        const { data:{products} } = await axios.put(`https://dummyjson.com/products/${edit.id}`, JSON.stringify(edit))
        return products

    } catch (error) {
        return rejectWithValue(error.message)
    }
})





export default getAllProductAction