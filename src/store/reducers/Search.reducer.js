//utils
import { createSlice } from "@reduxjs/toolkit"
//actionsType
import { FAIL_SEARCH, LOADING_SEARCH, SEARCHING, SUCCESS_SEARCH } from "../actions/types.action"

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
		[LOADING_SEARCH]: state => {
			state.isLoading = true
			state.isFail = false
			state.items = []
		},
		[SUCCESS_SEARCH]: (state, { payload }) => {
			state.isLoading = false
			state.isFail = false
			state.items = payload || []
		},
		[FAIL_SEARCH]: state => {
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
