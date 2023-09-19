//utils
import { put, retry, takeLatest } from "redux-saga/effects"
import { settingSearchSaga } from "../settings.middleware"
//api
import request from "../../api/request.api"
//actions
import { ProductSLice } from "../../store/reducers/Product.reducer"

const { LOADING_PRODUCT, SUCCESS_PRODUCT, FAIL_PRODUCT } = ProductSLice.actions

function* handleGetProduct({ payload }) {
	try {
		const retryCount = settingSearchSaga.retryCount
		const retryDelay = settingSearchSaga.retryDelay * 1000
		const data = yield retry(retryCount, retryDelay, request, {
			query: null,
			mainUrl: import.meta.env.VITE_MAIN_URL,
			subURL: `${import.meta.env.VITE_URL_PRODUCT}${payload}`
		})

		yield put(SUCCESS_PRODUCT(data))
	} catch (error) {
		yield put(FAIL_PRODUCT())
	}
}

export function* watchGetProduct() {
	yield takeLatest(LOADING_PRODUCT.type, handleGetProduct)
}
