//utils
import { debounce, put, retry, takeLatest } from "redux-saga/effects"
import { settingSearchSaga } from "../settings.middleware"
//api
import request from "../../api/request.api"
//actions
import { SearchSLice } from "../../store/reducers/Search.reducer"

const { LOADING_SEARCH, SUCCESS_SEARCH, FAIL_SEARCH, SEARCHING } = SearchSLice.actions

function filterChangeSearchAction({ type }) {
	return type === SEARCHING.type
}

function* handleChangeSearchSaga({ payload }) {
	yield put(LOADING_SEARCH(payload))
}

function* handleSearchSkillsSaga({ payload }) {
	try {
		const retryCount = settingSearchSaga.retryCount
		const retryDelay = settingSearchSaga.retryDelay * 1000
		const data = yield retry(retryCount, retryDelay, request, {
			query: payload,
			mainUrl: import.meta.env.VITE_MAIN_URL,
			subURL: import.meta.env.VITE_SEARCH_URL
		})

		yield put(SUCCESS_SEARCH(data))
	} catch (error) {
		yield put(FAIL_SEARCH())
	}
}

export function* watchChangeSearchSaga() {
	yield debounce(300, filterChangeSearchAction, handleChangeSearchSaga)
}

export function* watchSearchSkillsSaga() {
	yield takeLatest(LOADING_SEARCH.type, handleSearchSkillsSaga)
}
