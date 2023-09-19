//utils
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
//reducers
import ProductReducer from "./reducers/Product.reducer"
import ProductsReducer from "./reducers/Products.reducer"
import SearchReducer from "./reducers/Search.reducer"
//saga
import saga from "../middleWares/saga/index.saga"

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
	search: SearchReducer,
	products: ProductsReducer,
	product: ProductReducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(saga)
