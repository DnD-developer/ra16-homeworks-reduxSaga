//utils
import { createSlice } from "@reduxjs/toolkit"
//actionsType
import { FAIL, LOADING, SEARCHING, SUCCESS } from "../actions/types.action"

const initialState = {
	items: [],
	isLoading: false,
	isFail: false,
	search: ""
}

export const SearchSLice = createSlice({
	name: "search",
	initialState,
	reducers: {
		[LOADING]: state => {
			state.isLoading = true
			state.isFail = false
			state.items = []
		},
		[SUCCESS]: (state, { payload }) => {
			state.isLoading = false
			state.isFail = false
			state.items = payload || []
		},
		[FAIL]: state => {
			state.isFail = true
			state.isLoading = false
			state.items = []
		},
		[SEARCHING]: (state, { payload }) => {
			state.search = payload
		}
	}
})

export default SearchSLice.reducer
