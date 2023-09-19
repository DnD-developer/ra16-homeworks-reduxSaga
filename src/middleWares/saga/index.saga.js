//utils
import { spawn } from "redux-saga/effects"
//sagas
import { watchGetProducts } from "./products.saga"
import { watchGetProduct } from "./product.saga"
import { watchChangeSearchSaga, watchSearchSkillsSaga } from "./search.saga"

export default function* saga() {
	yield spawn(watchChangeSearchSaga)
	yield spawn(watchSearchSkillsSaga)
	yield spawn(watchGetProduct)
	yield spawn(watchGetProducts)
}
