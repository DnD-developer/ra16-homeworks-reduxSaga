//utils
import { debounce, put, retry, spawn, takeLatest } from "redux-saga/effects"
import { settingSearchSaga } from "../settings.middleware"
//api
import requestByQuery from "../../api/requestByQuery.api"
//actions
import { SearchSLice } from "../../store/reducers/Search.reducer"

const { LOADING, SUCCESS, FAIL, SEARCHING } = SearchSLice.actions

function filterChangeSearchAction({ type, payload }) {
	return type === SEARCHING.type
}

function* handleChangeSearchSaga({ payload }) {
	yield put(LOADING(payload))
}

function* handleSearchSkillsSaga({ payload }) {
	try {
		const retryCount = settingSearchSaga.retryCount
		const retryDelay = settingSearchSaga.retryDelay * 1000
		const data = yield retry(retryCount, retryDelay, requestByQuery, payload, import.meta.env.VITE_MAIN_URL, import.meta.env.VITE_SEARCH_URL)

		yield put(SUCCESS(data))
	} catch (error) {
		yield put(FAIL())
	}
}

function* watchChangeSearchSaga() {
	yield debounce(300, filterChangeSearchAction, handleChangeSearchSaga)
}

function* watchSearchSkillsSaga() {
	yield takeLatest(LOADING.type, handleSearchSkillsSaga)
}

export default function* saga() {
	yield spawn(watchChangeSearchSaga)
	yield spawn(watchSearchSkillsSaga)
}
