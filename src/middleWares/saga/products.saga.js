//utils
import { put, retry, takeLatest } from "redux-saga/effects"
import { settingSearchSaga } from "../settings.middleware"
//api
import request from "../../api/request.api"
//actions
import { ProductsSLice } from "../../store/reducers/Products.reducer"

const { LOADING_PRODUCTS, SUCCESS_PRODUCTS, FAIL_PRODUCTS } = ProductsSLice.actions

function* handleGetProducts() {
	try {
		const retryCount = settingSearchSaga.retryCount
		const retryDelay = settingSearchSaga.retryDelay * 1000
		const data = yield retry(retryCount, retryDelay, request, {
			query: null,
			mainUrl: import.meta.env.VITE_MAIN_URL,
			subURL: import.meta.env.VITE_URL_PRODUCT
		})

		yield put(SUCCESS_PRODUCTS(data))
	} catch (error) {
		yield put(FAIL_PRODUCTS())
	}
}

export function* watchGetProducts() {
	yield takeLatest(LOADING_PRODUCTS.type, handleGetProducts)
}
