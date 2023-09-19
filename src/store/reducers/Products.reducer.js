//utils
import { createSlice } from "@reduxjs/toolkit"
//actionsType
import { FAIL_PRODUCTS, LOADING_PRODUCTS, SUCCESS_PRODUCTS } from "../actions/types.action"

const initialState = {
	items: [],
	isLoading: false,
	isFail: false
}

export const ProductsSLice = createSlice({
	name: "products",
	initialState,
	reducers: {
		[LOADING_PRODUCTS]: state => {
			state.isLoading = true
			state.isFail = false
			state.items = []
			state.activeProduct = null
		},
		[SUCCESS_PRODUCTS]: (state, { payload }) => {
			state.isLoading = false
			state.isFail = false
			state.items = payload || []
		},
		[FAIL_PRODUCTS]: state => {
			state.isFail = true
			state.isLoading = false
			state.items = []
			state.activeProduct = null
		}
	}
})

export default ProductsSLice.reducer
