//utils
import { createSlice } from "@reduxjs/toolkit"
//actionsType
import { FAIL_PRODUCT, LOADING_PRODUCT, SUCCESS_PRODUCT } from "../actions/types.action"

const initialState = {
	isLoading: false,
	isFail: false,
	activeProduct: {
		id: null,
		name: null,
		price: null,
		content: null
	}
}

export const ProductSLice = createSlice({
	name: "product",
	initialState,
	reducers: {
		[LOADING_PRODUCT]: state => {
			state.isLoading = true
			state.isFail = false
			state.activeProduct = null
		},
		[SUCCESS_PRODUCT]: (state, { payload }) => {
			state.isLoading = false
			state.isFail = false
			state.activeProduct = payload
		},
		[FAIL_PRODUCT]: state => {
			state.isFail = true
			state.isLoading = false
			state.items = []
			state.activeProduct = null
		}
	}
})

export default ProductSLice.reducer
